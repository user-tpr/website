const SETTINGS = {
  name: "Aamir Ullah",
  role: "Freight Coordinator",
  phone: "+973 37907007",
  whatsappNumber: "+973 37907007",
  whatsappMessage: "Hello",
  mapsUrl: "https://maps.app.goo.gl/Ho47xQraBpJeNtzP7",
  siteUrl: "www.alnakhuda.com",
  vcf: {
    fullName: "Your Name",
    org: "Company",
    title: "Title",
    phone: "++973 37907007",
    email: "aamir@alnakhuda.net",
    url: "www.alnakhuda.com"
  }
};

document.getElementById('name').textContent = SETTINGS.name;
document.getElementById('role').textContent = SETTINGS.role;
document.getElementById('bio').textContent = SETTINGS.bio;
  document.getElementById('whatsapp').href =
  `https://wa.me/${SETTINGS.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(SETTINGS.whatsappMessage)}`;
document.getElementById('call').href = `tel:${SETTINGS.phone}`;
document.getElementById('maps').href = SETTINGS.mapsUrl;
document.getElementById('site').href = SETTINGS.siteUrl;

document.getElementById('saveContact').addEventListener('click', () => {
  const v = SETTINGS.vcf;
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${v.fullName}`,
    `ORG:${v.org}`,
    `TITLE:${v.title}`,
    `TEL;TYPE=CELL:${v.phone}`,
    `EMAIL;TYPE=INTERNET:${v.email}`,
    `URL:${v.url}`,
    'END:VCARD'
  ].join('\n');
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'contact.vcf';
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
});
