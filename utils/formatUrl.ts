
// export function formatURL(url: string) {
//     const makeLowerCase = url?.toLowerCase()
//     const urlArr: string[] = makeLowerCase?.split(' ')
//     return urlArr?.join('-')
// }

export function formatURL(url: string) {
  if (!url) return "";
  return url.toLowerCase().trim().replace(/\s+/g, "-").replace(/-+/g, "-");
}

export const formatDate = (isoDate: string): string => {
    return new Date(isoDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};