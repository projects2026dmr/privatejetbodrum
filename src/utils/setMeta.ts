export function setMetaTags(meta: {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}) {
  if (meta.title) {
    document.title = meta.title;
    updateTag("meta[name='twitter:title']", meta.title);
    updateTag("meta[property='og:title']", meta.title);
  }

  if (meta.description) {
    updateTag("meta[name='description']", meta.description);
    updateTag("meta[name='twitter:description']", meta.description);
    updateTag("meta[property='og:description']", meta.description);
  }

  if (meta.url) {
    updateTag("meta[property='og:url']", meta.url);
  }

  if (meta.image) {
    updateTag("meta[property='og:image']", meta.image);
    updateTag("meta[name='twitter:image']", meta.image);
  }
}

function updateTag(selector: string, content: string) {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    const [attr, value] = selector.replace("]", "").split("[")[1].split("=");
    tag.setAttribute(attr, value.replace(/['"]+/g, ""));
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}
