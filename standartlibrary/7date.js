{
  // epoch dan unix timestamp
  const dateNow = new Date();
  console.log(dateNow); // output: tanggal saat ini

  const setDate = new Date(2000, 7, 29);
  console.log(setDate); // output: 29 Agustus 2000

  const setTime = new Date(2000, 7, 29, 12, 30, 45, 123);
  console.log(setTime); // output: 29 Agustus 2000 12:30:45.123

  const millies = new Date(0);
  console.log(millies); // output: 1 Januari 1970

  console.log(Date.now()); // output: unix timestamp

  const time = Date.parse("2024-08-15T07:01:15.020+08:00");
  console.log(time); // Number of milliseconds since Unix Epoch

  const date = new Date(time);
  console.log(date.toISOString()); // Log in ISO format (UTC)
}
{
  // date getter and setter
  // untuk mendapatkan informasi tanggal
  const date = new Date();
  console.log(date.getFullYear()); // output: tahun
  console.log(date.getMonth()); // output: bulan
  console.log(date.getDate()); // output: tanggal
  console.log(date.getDay()); // output: hari
  console.log(date.getHours()); // output: jam
  console.log(date.getMinutes()); // output: menit
  console.log(date.getSeconds()); // output: detik
  console.log(date.getMilliseconds()); // output: milidetik
  console.log(date.getTimezoneOffset()); // output: offset timezone
}
