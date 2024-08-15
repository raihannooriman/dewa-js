{
  //membuat regular expression
  const regex1 = /hello/;
  const regex2 = new RegExp("hello");
  const regex3 = new RegExp(/hello/);
}
{
  const name = "raihan nooriman raihan noor";

  const regex = /none/; // tempat mencari kata yang diinginkan dalam string

  const cari = regex.exec(name);
  console.log(cari); // output: [ 'raihan', index: 0, input: 'raihan nooriman raihan noor', groups: undefined ]
  const result = regex.test(name);
  console.log(result); // output: true
}
{
  const name = "raihan nooriman\nRaihan noor\nRaihan Iman";

  const regexg = /raihan/g; // mencari kata yang sama dalam string
  const regexi = /raihan/gi; // mencari kata yang sama dalam string tanpa memperhatikan huruf besar atau kecil
  const regexm = /raihan/m; // mencari kata yang sama dalam string dengan memperhatikan baris baru

  let result;
  while ((result = regexg.exec(name)) !== null) {
    // ganti regexg dengan regexi atau regexm
    console.log(result);
  }
}
{
  const regex = /han[aiueo]/gi;
  const name = "hana hani hanu hane hano hari huri here horo hura h";
  let result;
  while ((result = regex.exec(name)) !== null) {
    console.log(result);
  }

  console.log(name.match(/han[aiueo]/gi)); // mencari kata yang dicari
  console.log(name.search(/han[aiueo]/gi)); // mencari posisi kata yang dicari
  console.log(name.replace(/han[aiueo]/gi, "raihan")); // mengganti kata yang dicari dengan kata yang diinginkan
  console.log(name.split(/e/gi)); // memisahkan kata yang dicari
  console.log(name.replaceAll(/han[aiueo]/gi, "raihan")); // mengganti semua kata yang dicari dengan kata yang diinginkan
}
