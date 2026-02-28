/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { BLOCKS, INLINES, MARKS, Document, Block, Inline } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import Accordion from "../Accordion/Accordion";
import Link from "next/link";
import Image from "next/image";
import styles from "./RichText.module.scss";

interface RichTextProps {
  content: Document;
}

const options: any = {
  renderMark: {
    [MARKS.CODE]: (text: React.ReactNode) => (
      <pre className={styles.code_block}>
        <code>{text}</code>
      </pre>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Block, children: React.ReactNode) => {
      if (node.content.some(item => item?.nodeType === 'text' && item.marks?.some((mark: any) => mark.type === 'code'))) {
        return (
          <pre className={styles.code_block}>
            <code className={styles.code}>{children}</code>
          </pre>
        );
      }
      // if (node.content.some(item => item?.nodeType === 'text' && item.marks?.some((mark: any) => mark.type === 'bold'))) {
      //   return <p className={styles.bold}>{children}</p>;
      // }
      if (node.content.some(item => item?.nodeType === 'text' && item.marks?.some((mark: any) => mark.type === 'italic'))) {
        return <p className={styles.italic}>{children}</p>;
      }
      if (node.content.some(item => item?.nodeType === 'text' && item.marks?.some((mark: any) => mark.type === 'underline'))) {
        return <u className={styles.underline}>{children}</u>;
      }
      return <p className={styles.paragraph}>{children}</p>;
    },
    [BLOCKS.QUOTE]: (node: Block, children: React.ReactNode) => (
      <blockquote className={styles.blockquote}>
        <div className={styles.quote_icon_left}>
          <Image alt='quote' fill src='/svgs/quote-left-solid.svg' />
        </div>
        {children}
        <div className={styles.quote_icon_right}>
          <Image alt='quote' fill src='/svgs/quote-right-solid.svg' />
        </div>
      </blockquote>
    ),
    [BLOCKS.HEADING_1]: (node: Block, children: React.ReactNode) => (
      <h1 className={styles.heading1}>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: Block, children: React.ReactNode) => (
      <h2 className={styles.heading2}>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: Block, children: React.ReactNode) => (
      <h3 className={styles.heading3}>{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: Block, children: React.ReactNode) => (
      <h4 className={styles.heading4}>{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: Block, children: React.ReactNode) => (
      <h5 className={styles.heading5}>{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: Block, children: React.ReactNode) => (
      <h6 className={styles.heading6}>{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node: Block, children: React.ReactNode) => (
      <ul className={styles.unordered_list}>{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: Block, children: React.ReactNode) => (
      <ol className={styles.ordered_list}>{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: Block, children: React.ReactNode) => (
      <li className={styles.list_item}>{children}</li>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block) => {
      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <div className={styles.video_embed}>
            <iframe
              src={node.data.target.fields.embedUrl}
              title={node.data.target.fields.title}
              allowFullScreen
            />
          </div>
        );
      }
      return null;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: Block) => {
      const { url, title, description } = node.data.target.fields.file || {};
      if (!url) return null;
      const imageUrl = url.startsWith('//') ? `https:${url}` : url;
      return (
        <div className={styles.image_container}>
          <Image fill sizes='100%' loading='lazy'
            src={imageUrl}
            alt={title || description || 'Blog image'}
          />
        </div>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node: Inline) => {
      if (node.data.target.sys.contentType.sys.id === 'blogs') {
        return (
          <Link href={`/blogs/${node.data.target.fields.slug}`} className={styles.entryLink}>
            {node.data.target.fields.title}
          </Link>
        );
      }
      return null;
    },
    [INLINES.HYPERLINK]: (node: Inline) => {
      const text = node.content.find(item => item.nodeType === 'text')?.value || '';
      const url = node.data.uri.startsWith('http://') || node.data.uri.startsWith('https://')
        ? node.data.uri
        : `https://${node.data.uri}`;
      return (
        <Link href={url} className={styles.hyperlink} rel="noopener noreferrer" target="_blank">
          {text}
        </Link>
      );
    },
  },
};

const RichText: React.FC<RichTextProps> = ({ content }: RichTextProps) => {
  return (
    <div className={styles.rich_text_container}>
      {documentToReactComponents(content, options)}
    </div>
  );
};

export default RichText;