import DOMPurify from "dompurify";




// vulnerable: dangerouslySetInnerHTML
function Comment({ html }) {
  return ( <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />);
}
