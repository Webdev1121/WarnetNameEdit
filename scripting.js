var warnet = prompt("Nama warnet mu apa ? ");


if (warnet === null || !isNaN(warnet)){
    while (warnet !== null || isNaN(warnet)){
        alert("Invalid , please try again");
        warnet = prompt("Nama warnet mu apa ?");
        console.log(warnet)
       if (warnet !== null || !isNaN(warnet)){
           document.write();
           break;
       }
    }
}else {
    document.write();
}

var color = prompt("Mau Warna Apa ? Ketik Warna HTML nya di Gugel, contoh, SPASI WAJIB DI BUANG! < #fffff > , WAJIB MENAMBAHKAN < DAN > !  ");


if (color === null || !isNaN(color)){
    while (color !== null || isNaN(color)){
        alert("Invalid , please try again");
        getName = prompt("Mau Warna Apa ? Ketik Warna HTML nya di Gugel, contoh, SPASI WAJIB DI BUANG! < #fffff > , WAJIB MENAMBAHKAN < DAN > !  ");
        console.log(color)
       if (color !== null || !isNaN(color)){
           document.write();
           break;
       }
    }

}else {
    document.write();
}

var brcolor = prompt("Warna Line Ke 2 / Warna < br> tag, Klik OK Jika tidak Mau, CONTOH INPUT, SPASI WAJIB DI HAPUS < #00000 >");


if (brcolor === null || !isNaN(brcolor)){
    while (brcolor !== null || isNaN(brcolor)){
        alert("Invalid , please try again");
        brcolor = prompt("Warna Line Ke 2 / Warna < br> tag, Klik OK Jika tidak Mau, CONTOH INPUT, SPASI WAJIB DI HAPUS < #00000 >");
        console.log(brcolor)
       if (brcolor !== null || !isNaN(brcolor)){
           document.write();
           break;
       }
    }

}else {
    document.write();
}

var brtag = prompt("Line Ke 2 / < br> tag, Klik Cancel Jika tidak Mau.");


if (brtag === null || !isNaN(brtag)){
    while (brtag !== null || isNaN(brtag)){
        alert("Invalid , please try again");
        brtag = prompt("Line Ke 2 / < br> tag, Klik Cancel Jika tidak Mau.");
        console.log(brtag)
       if (brtag !== null || !isNaN(brtag)){
           document.write();
           break;
       }
    }

}else {
    document.write();
}

alert("Hasil Sudah Keluar!");
