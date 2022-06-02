var warnet = prompt("Nama warnet mu apa ? ");


if (warnet === null || !isNaN(warnet)){
    while (getName !== null || isNaN(getName)){
        alert("Invalid , please try again");
        warnet = prompt("Nama warnet mu apa ?");
        console.log(warnet)
       if (getName !== null || !isNaN(warnet)){
           document.write();
           break;
       }
    }
}else {
    document.write();
}

var color = prompt("Mau Warna Apa ? Ketik Warna HTML nya di Gugel, contoh, SPASI WAJIB DI BUANG! < #fffff > , WAJIB MENAMBAHKAN < DAN > !  ");


if (getName === null || !isNaN(getName)){
    while (getName !== null || isNaN(getName)){
        alert("Invalid , please try again");
        getName = prompt("Siapa namamu ? ");
        console.log(getName)
       if (getName !== null || !isNaN(getName)){
           document.write("Halo ", getName);
           break;
       }
    }

}else {
    document.write();
}

var brcolor = prompt("Warna Line Ke 2 / Warna < br> tag, Klik OK Jika tidak Mau, CONTOH INPUT, SPASI WAJIB DI HAPUS < #00000 >");


if (getName === null || !isNaN(getName)){
    while (getName !== null || isNaN(getName)){
        alert("Invalid , please try again");
        getName = prompt("Siapa namamu ? ");
        console.log(getName)
       if (getName !== null || !isNaN(getName)){
           document.write("Halo ", getName);
           break;
       }
    }

}else {
    document.write();
}

var brtag = prompt("Line Ke 2 / < br> tag, Klik Cancel Jika tidak Mau.");


if (getName === null || !isNaN(getName)){
    while (getName !== null || isNaN(getName)){
        alert("Invalid , please try again");
        getName = prompt("Siapa namamu ? ");
        console.log(getName)
       if (getName !== null || !isNaN(getName)){
           document.write("Halo ", getName);
           break;
       }
    }

}else {
    document.write();
}


var done = alert("Udah Selesai Nih:)");


if (getName === null || !isNaN(getName)){
    while (getName !== null || isNaN(getName)){
        alert("Invalid , please try again");
        getName = prompt("Siapa namamu ? ");
        console.log(getName)
       if (getName !== null || !isNaN(getName)){
           document.write("Halo ", getName);
           break;
       }
    }

}else {
    document.write("Copy Lalu Paste Ke Warnet life : ");
}
