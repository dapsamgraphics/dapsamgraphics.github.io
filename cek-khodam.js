document.getElementById('nameForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;

  const responses = [
`${name}, Khodam lo Layangan Petek`,
    `${name}, Khodam lo Kutu air`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Tobrut Jahat`,
    `${name}, Khodam lo Kura Kura`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Liliput`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Ubur Ubur`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Kapibara`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Kebo`,
    `${name}, Khodam lo Undur Undur`,
    `${name}, Khodam lo Sapi Melet`,
    `${name}, Khodam lo Biawak Rica Rica`,
    `${name}, Khodam lo Beat Karbu`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Sigit Rendang`,
    `${name}, Khodam lo Ban Dalem`,
    `${name}, Khodam lo Tokek Belang`,
    `${name}, Khodam lo Macan Ompong`,
    `${name}, Khodam lo Gagang Pintu`,
    `${name}, Khodam lo Monyet Birahi`,
    `${name}, Khodam lo Salon Pas`,
    `${name}, Khodam lo Seblak Ceker`,
    `${name}, Khodam lo Macan Ciseeng`,
    `${name}, Khodam lo Farhan Kebab`,
    `${name}, Khodam lo Daki Firaun`,
    `${name}, Khodam lo Daki Kunti`,
    `${name}, Khodam lo Batagor`,
    `${name}, Khodam lo Somay`,
    `${name}, Khodam lo Sendal Karpil`,
    `${name}, Khodam lo Karung Goni`,
    `${name}, Khodam lo Engsel Lemari`,
    `${name}, Khodam lo Aspal Tol`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Charger Aipon`,
    `${name}, Khodam lo Taplak Meja`,
    `${name}, Khodam lo Dinamo Tamiya`,
    `${name}, Khodam lo Asep Kulkas`,
    `${name}, Khodam lo Sayur Gembok`,
    `${name}, Khodam lo Gagang Sapu`,
    `${name}, Khodam lo Remot Ac`,
    `${name}, Khodam lo Mejikom`,
    `${name}, Khodam lo Blender`,
    `${name}, Khodam lo Botol kecap`,
    `${name}, Khodam lo Botol Yakul`,
    `${name}, Khodam lo Budi Martabak`,
    `${name}, Khodam lo Jajang Penyok`,
    `${name}, Khodam lo Tutut Empang`,
    `${name}, Khodam lo Elang merah`,
    `${name}, Khodam lo Cicak Ekor 9`,
    `${name}, Khodam lo Sapu Lidi`,
    `${name}, Khodam lo Keset Welcome`,
    `${name}, Khodam lo Botol Kecap`,
    `${name}, Khodam lo Sayur Bening`,
    `${name}, Khodam lo Centong Nasi`,
    `${name}, Khodam lo Nutrisarii Pepaya`,
    `${name}, Khodam lo Ilham Spakbor`,
    `${name}, Khodam lo Kutu Monyet`,
    `${name}, Khodam lo Kerang Ijo`,
    `${name}, Khodam lo Cacing pita`,
    `${name}, Khodam lo Hembodi`,
    `${name}, Khodam lo Ketek Sapi`,
    `${name}, Khodam lo Odol`,
    `${name}, Khodam lo Ulet Bulu`,
    `${name}, Khodam lo Sumpit Gacoan`,
    `${name}, Khodam lo Kodok Pincang`,
    `${name}, Khodam lo Macan Biskuat`,
    `${name}, Khodam lo Kabel Type C`,
    `${name}, Khodam lo Ketombe basah`,
    `${name}, Khodam lo Tutup Termos`,
    `${name}, Khodam lo KuntilBadak`,
    `${name}, Khodam lo Pala Casan`,
    `${name}, Khodam lo Pocong Bengek`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Tuyul Mohak`,
    `${name}, Khodam lo Beat Karbu`,
    `${name}, Khodam lo Daun Jeruk`,
    `${name}, Khodam lo Sendal Jepit`,
    `${name}, Khodam lo Roti Aoka`,
    `${name}, Khodam lo Bungkus Gorengan`,
    `${name}, Khodam lo Kecoa Terbang`,
    `${name}, Khodam lo Spanduk partai`,
    `${name}, Khodam lo Lobster`,
    `${name}, Khodam lo Ikan Cucut`,
    `${name}, Khodam lo Ikan Mujaer`,
    `${name}, Khodam lo Suster Ngentot`,
    `${name}, Khodam lo Sari gandum`,
    `${name}, Khodam lo Extrajoz`,
    `${name}, Khodam lo Tutup Toples`,
    `${name}, Khodam lo Hiu Pedelpop`,
    `${name}, Khodam lo Debu Kipas`,
    `${name}, Khodam lo Laron`,
    `${name}, Khodam lo Belut listrik`,
    `${name}, Khodam lo Agus Kopling`,
    `${name}, Khodam lo Udang Drible`,
    `${name}, Khodam lo Supra geter`,
    `${name}, Khodam lo Pensil Inul`,
    `${name}, Khodam lo Kalender`,
    `${name}, Khodam lo Terong lemes`,
    `${name}, Khodam lo Solatip`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Semut Rang Rang`,
    `${name}, Khodam lo Lele Sadboy`,
    `${name}, Khodam lo Mesin ATM`,
    `${name}, Khodam lo Masako Ayam`,
    `${name}, Khodam lo Tuyul Mulet`,
    `${name}, Khodam lo Bakwan Gosong`,
    `${name}, Khodam lo Dispenser`,
    `${name}, Khodam lo Sendal Swallow`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Kosong`,
    `${name}, Khodam lo Kipas Angin`,
    `${name}, Khodam lo Kaos Kaki`,
    `${name}, Khodam lo Es Teh Anget`,
    `${name}, Khodam lo Tobrut Jahat`,
    `${name}, Khodam lo Kuda lumping`,
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
