import React from "react";
import styles from "./Agenda.module.scss";

const Agenda = () => {
  // const agendaList = [
  //   {
  //     header: 'opening plenary',
  //     items: [
  //       {
  //         title: 'registration',
  //         content: {
  //           name: 'Delegate Arrival & Registration',
  //           subtext: 'Welcome desk open — name tags, programme kits',
  //           role: 'Logistics',
  //         }
  //       },
  //       {
  //         title: 'welcome address',
  //         content: {
  //           name: 'Welcome Address',
  //           subtext: 'Chief Executive Officer, GovTech Africa',
  //           role: 'Opening',
  //         }
  //       },
  //       {
  //         title: `host's remarks`,
  //         content: {
  //           name: `Host's Remarks`,
  //           subtext: 'Executive Secretary, National Assembly Library Trust Fund',
  //           role: 'Opening',
  //         }
  //       },
  //       {
  //         title: 'keynote address',
  //         content: {
  //           name: 'Keynote Address',
  //           subtext: 'Dr. Bosun Tijani — Minister of Communications, Innovation & Digital Economy',
  //           role: 'keynote',
  //         }
  //       },
  //       {
  //         title: 'opening & declaration',
  //         content: {
  //           name: 'Opening Address & Official Declaration',
  //           subtext: 'Rt. Hon. Benjamin Okezie Kalu — Deputy Speaker, House of Representatives',
  //           role: 'keynote',
  //         }
  //       },
  //     ]
  //   },
  //   {
  //     header: 'GovTech Africa Presentations',
  //     items: [
  //       {
  //         title: 'Outlook Presentation',
  //         content: {
  //           name: 'Presentation of GovTech Africa Outlook 2026',
  //           subtext: 'GovTech Africa Research Team',
  //           role: 'Report Launch',
  //         }
  //       },
  //       {
  //         title: 'platform demo',
  //         content: {
  //           name: 'Africa GovTech Week 2027 — Fulcrum Platform Demo',
  //           subtext: 'GovTech Africa',
  //           role: 'live demo',
  //         }
  //       },
  //       {
  //         title: `special remarks`,
  //         content: {
  //           name: `Special Remarks`,
  //           subtext: 'The Ambassador, Embassy of Finland in Abuja',
  //           role: 'Diplomatic',
  //         }
  //       },
  //     ]
  //   },
  // ]
  const cardsList = [
    {
      title: `Opening & Keynote`,
      topic: ``,
      subtext: `A high-level framing of Nigeria's Digital First Governance agenda, setting 
        the tone for policy alignment and reform priorities.`
    },
    {
      title: `Panel Session 1`,
      topic: `Digital First Governance: Rethinking How Nigerian Governments Serve, Engage 
        and Deliver`,
      subtext: `A strategic assessment of Nigeria's government digitisation journey, with a 
        focus on institutional reform, interoperability, legal frameworks, and accountability 
        mechanisms.`
    },
    {
      title: `Panel Session 2`,
      topic: `Building the Digital Backbone of Government: Innovation, Investment and Global 
        Expertise for Sustainable Governance`,
      subtext: `Discussions on building the digital backbone of government, including 
        innovation, infrastructure development, and sustainable investment models. Insights 
        on mobilising global expertise, strengthening governance safeguards, and ensuring 
        inclusive, transparent, and accountable digital transformation.`
    },
    // {
    //   title: `Panel Session 3`,
    //   topic: `Aligning Global Expertise and Civic Oversight for Sustainable Digital Governance`,
    //   subtext: `Insights on mobilising global expertise, strengthening governance safeguards,
    //     and ensuring inclusive, transparent, and accountable digital transformation.`
    // },
    {
      title: `Interactive Dialogue & Stakeholder Engagement`,
      subtext: `Opportunities for participants to contribute perspectives, share experiences,
        and align on priority actions.`
    },
    {
      title: `Outcome-Oriented Close`,
      subtext: `Consolidation of key insights into a shared set of reform priorities, 
        partnership pathways, and next steps to advance Digital First Governance in Nigeria.`
    },
    {
      title: `Tour of the National Assembly Library and Resource Centre`,
      subtext: ``
    },
  ]
  return (
    <section id="agenda" className={styles.agenda_section}>
      <div className={styles.agenda_container}>
        <div className={styles.about_label}>
          {/* <div className={styles.label_line}></div> */}
          <p>WHAT TO EXPECT?</p>
        </div>
        <div className={styles.about_text}>
          <h1>Programme Snapshot</h1>
          <h6>
            The Roundtable will feature a tightly curated programme designed to drive 
            focused dialogue and practical outcomes:
          </h6>
        </div>
        <div className={styles.sessions}>
          <div className={styles.cards}>
            {cardsList.map((card, index) =>
              <div key={index} data-index={index} className={styles.card}>
                <div className={styles.number}>
                  <h3>0{index + 1}</h3>
                </div>
                <div className={styles.card_body}>
                  <h6>{card.title}</h6>
                  <p>{card.subtext}</p>
                </div>
              </div>
            )}
          </div>
          <div className={styles.session_details_container}>
            {cardsList.map((card, index) =>
              <div data-index={index} className={styles.session_details} key={index}>
                <div className={styles.session_title}>
                  <h3>{card.title}</h3>
                </div>
                <div className={styles.session_details_text}>
                  {card.topic && (
                    <h2>{card.topic}</h2>
                  )}
                  <p>{card.subtext}</p>
                </div>
              </div>
            )}
          </div>
          <div className={styles.title}>
            <h3>Download Detailed Agenda</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Agenda;