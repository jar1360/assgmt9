import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);


app.get('/search', (req, res) => {
  const q = req.query.q || '';

  const vuln = '<h1>Results for ${q}</h1>';

  const safe = DOMPurify.sanitize(vuln);

  res.send(safe);
});
