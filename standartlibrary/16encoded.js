{
  const url = "https://hanhub.vercel.app/#contact?name=hanhub&age=20";
  console.log(url);

  const encoded = encodeURI(url);
  console.log(encoded);

  const decoded = decodeURI(encoded);
  console.log(decoded);
}
{
  const url = "https://hanhub.vercel.app/#contact?name=";
  const value = "hanhub&age=20";

  console.log(url);

  const encoded = encodeURIComponent(value);
  console.log(url + encoded);

  const decoded = decodeURIComponent(encoded);
  console.log(url + decoded);
}
