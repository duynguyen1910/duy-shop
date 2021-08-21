export function addSubfixSlug(slug: string) {
  return `${slug}-${new Date().getTime()}`;;
}
