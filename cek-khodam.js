document.getElementById('nameForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;

  const responses = [
    `${name}, Kodam kamu Ferdy Sambo`,
    `${name}, Kodam kamu Bandot Engas`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Tobrut Jahat`,
    `${name}, Kodam kamu kura kura`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Liliput`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Ubur Ubur`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Kapibara`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Kebo`,
    `${name}, Kodam kamu Undur Undur`,
    `${name}, Kodam kamu Sapi Melet`,
    `${name}, Kodam kamu Biawak Rica Rica`,
    `${name}, Kodam kamu Beat Karbu`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Sigit Rendang`,
    `${name}, Kodam kamu Ban Dalem`,
    `${name}, Kodam kamu Tokek Belang`,
    `${name}, Kodam kamu Macan Ompong`,
    `${name}, Kodam kamu Gagang Pintu`,
    `${name}, Kodam kamu Toa Masjid`,
    `${name}, Kodam kamu Salon Pas`,
    `${name}, Kodam kamu Seblak Ceker`,
    `${name}, Kodam kamu Macan Ciseeng`,
    `${name}, Kodam kamu Farhan Kebab`,
    `${name}, Kodam kamu Daki Firaun`,
    `${name}, Kodam kamu Daki Kunti`,
    `${name}, Kodam kamu Batagor`,
    `${name}, Kodam kamu Somay`,
    `${name}, Kodam kamu Sendal Karpil`,
    `${name}, Kodam kamu Karung Goni`,
    `${name}, Kodam kamu Engsel Lemari`,
    `${name}, Kodam kamu Aspal Tol`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Charger Aipon`,
    `${name}, Kodam kamu Taplak Meja`,
    `${name}, Kodam kamu Zaki Indomi`,
    `${name}, Kodam kamu Asep Kulkas`,
    `${name}, Kodam kamu Sayur Gembok`,
    `${name}, Kodam kamu Gagang Sapu`,
    `${name}, Kodam kamu Remot Ac`,
    `${name}, Kodam kamu Mejikom`,
    `${name}, Kodam kamu Blender`,
    `${name}, Kodam kamu Botol kecap`,
    `${name}, Kodam kamu Botol Yakul`,
    `${name}, Kodam kamu Budi Martabak`,
    `${name}, Kodam kamu Jajang Penyok`,
    `${name}, Kodam kamu Tutut Empang`,
    `${name}, Kodam kamu Elang merah`,
    `${name}, Kodam kamu Cicak Ekor 9`,
    `${name}, Kodam kamu Sapu Lidi`,
    `${name}, Kodam kamu Keset Welcome`,
    `${name}, Kodam kamu Botol Kecap`,
    `${name}, Kodam kamu Sayur Bening`,
    `${name}, Kodam kamu Centong Nasi`,
    `${name}, Kodam kamu Nutrisarii Pepaya`,
    `${name}, Kodam kamu Ilham Spakbor`,
    `${name}, Kodam kamu Kutu Monyet`,
    `${name}, Kodam kamu Kerang Ijo`,
    `${name}, Kodam kamu Cacing pita`,
    `${name}, Kodam kamu Hembodi`,
    `${name}, Kodam kamu Ketek Sapi`,
    `${name}, Kodam kamu Odol`,
    `${name}, Kodam kamu Ulet Bulu`,
    `${name}, Kodam kamu Sumpit Gacoan`,
    `${name}, Kodam kamu Kodok Pincang`,
    `${name}, Kodam kamu Macan Biskuat`,
    `${name}, Kodam kamu Kabel Type C`,
    `${name}, Kodam kamu Ketombe basah`,
    `${name}, Kodam kamu Tutup Termos`,
    `${name}, Kodam kamu KuntilBadak`,
    `${name}, Kodam kamu Pala Casan`,
    `${name}, Kodam kamu Pocong Bengek`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Tuyul Mohak`,
    `${name}, Kodam kamu Beat Karbu`,
    `${name}, Kodam kamu Daun Jeruk`,
    `${name}, Kodam kamu Sendal Jepit`,
    `${name}, Kodam kamu Roti Aoka`,
    `${name}, Kodam kamu Bungkus Gorengan`,
    `${name}, Kodam kamu Kecoa Terbang`,
    `${name}, Kodam kamu Spanduk partai`,
    `${name}, Kodam kamu Lobster`,
    `${name}, Kodam kamu Ikan Cucut`,
    `${name}, Kodam kamu Ikan Mujaer`,
    `${name}, Kodam kamu Suster Ngentot`,
    `${name}, Kodam kamu Sari gandum`,
    `${name}, Kodam kamu Extrajoz`,
    `${name}, Kodam kamu Tutup Toples`,
    `${name}, Kodam kamu Hiu Pedelpop`,
    `${name}, Kodam kamu Debu Kipas`,
    `${name}, Kodam kamu Laron`,
    `${name}, Kodam kamu Belut listrik`,
    `${name}, Kodam kamu Agus Kopling`,
    `${name}, Kodam kamu Udang Drible`,
    `${name}, Kodam kamu Supra geter`,
    `${name}, Kodam kamu Pensil Inul`,
    `${name}, Kodam kamu Kalender`,
    `${name}, Kodam kamu Terong lemes`,
    `${name}, Kodam kamu Solatip`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Semut Rang Rang`,
    `${name}, Kodam kamu Lele Sadboy`,
    `${name}, Kodam kamu Mesin ATM`,
    `${name}, Kodam kamu Masako Ayam`,
    `${name}, Kodam kamu Tuyul Mulet`,
    `${name}, Kodam kamu Bakwan Gosong`,
    `${name}, Kodam kamu Dispenser`,
    `${name}, Kodam kamu Sendal Swallow`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Kosong`,
    `${name}, Kodam kamu Kipas Angin`,
    `${name}, Kodam kamu Kaos Kaki`,
    `${name}, Kodam kamu Es Teh Anget`,
    `${name}, Kodam kamu Tobrut Jahat`,
    `${name}, Kodam kamu Kuda lumping`,
  ];

  fetch('nama.txt')
    .then((response) => response.text())
    .then((data) => {
      const lines = data.split('\n');
      let matchedResponse = null;
      lines.forEach((line) => {
        const [nama, sapaan] = line.split('|');
        if (nama.trim().toLowerCase() === name.trim().toLowerCase()) {
          matchedResponse = `${name},Kodam kamu ${sapaan}`;
        }
      });

      if (!matchedResponse) {
        matchedResponse = responses[Math.floor(Math.random() * responses.length)];
      }

      document.getElementById('response').innerText = matchedResponse;
    })
    .catch((error) => {
      console.error('Error Cok,Kodamnya ngambek:');
      document.getElementById('response').innerText = responses[Math.floor(Math.random() * responses.length)];
    });
});
