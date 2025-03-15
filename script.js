const mahasiswa = [
    { no: 1, noPendaftaran: "20251101", nama: "Adellathifurra Khairunnisa", fakultas: "FIP", jalurMasuk: "SNBP", departemen: "Administrasi Pendidikan", prodi: "Administrasi Pendidikan(S1)" },
    { no: 2, noPendaftaran: "20252102", nama: "Naila Ghania Putri", fakultas: "FBS", jalurMasuk: "SNBT", departemen: "Ilmu Informasi dan Perpustakaan", prodi: "Perpustakaan dan Ilmu Informasi (S1)" },
    { no: 3, noPendaftaran: "20253101", nama: "Elya Latifatul Hasanah", fakultas: "FMIPA", jalurMasuk: "Mandiri", departemen: "Fisika", prodi: "Pendidikan Fisika (S1)" },
    { no: 4, noPendaftaran: "20253404", nama: "Muhammad Zahran", fakultas: "FT", jalurMasuk: "SNBP", departemen: "Teknik Elektronika", prodi: "Informatika (S1)" },
    { no: 5, noPendaftaran: "20252550", nama: "Muhammad Zikri", fakultas: "FIS", jalurMasuk: "SNBT", departemen: "Sejarah", prodi: "Pendidikan Sejarah (S1)" },
    { no: 6, noPendaftaran: "20259709", nama: "Imam Attahira", fakultas: "FIK", jalurMasuk: "Mandiri", departemen: "Kepelatihan", prodi: "Pendidikan Kepelatihan (S1)" },
    { no: 7, noPendaftaran: "20267101", nama: "Auditya Merosya Putri", fakultas: "FEB", jalurMasuk: "SNBP", departemen: "Akuntansi", prodi: "Akuntansi (S1)" },
    { no: 8, noPendaftaran: "20255194", nama: "Annisa Dwi Putri", fakultas: "FPP", jalurMasuk: "SNBT", departemen: "Pariwisata", prodi: "Pariwisata (S1)" },
    { no: 9, noPendaftaran: "20258083", nama: "Aulia Laylatul Khairunisa", fakultas: "FPK", jalurMasuk: "Mandiri", departemen: "Psikologi", prodi: "Psikologi (S1)" },
    { no: 10, noPendaftaran: "20258904", nama: "Assyfa Salsabila", fakultas: "FK", jalurMasuk: "SNBP", departemen: "Kedokteran", prodi: "Kedokteran(S1)" },

    // Fakultas Ilmu Pendidikan (FIP)
    { no: 2, noPendaftaran: "20251102", nama: "Alya Nabilah", fakultas: "FIP", jalurMasuk: "SNBT", departemen: "Bimbingan dan Konseling", prodi: "Bimbingan dan Konseling (S1)" },
    { no: 3, noPendaftaran: "20251103", nama: "Nurul Fadilah", fakultas: "FIP", jalurMasuk: "Mandiri", departemen: "Pendidikan Guru Sekolah Dasar", prodi: "Pendidikan Guru Sekolah Dasar (S1)" },
    { no: 4, noPendaftaran: "20251104", nama: "Rahmatul Ummah", fakultas: "FIP", jalurMasuk: "SNBP", departemen: "Psikologi Pendidikan dan Bimbingan", prodi: "Psikologi Pendidikan (S1)" },
    { no: 5, noPendaftaran: "20251105", nama: "Nabila Putri", fakultas: "FIP", jalurMasuk: "SNBT", departemen: "Pendidikan Luar Sekolah", prodi: "Pendidikan Luar Sekolah (S1)" },
    
    // Fakultas Bahasa dan Seni (FBS)
    { no: 7, noPendaftaran: "20252102", nama: "Farhan Ramadhan", fakultas: "FBS", jalurMasuk: "SNBT", departemen: "Bahasa dan Sastra Inggris", prodi: "Pendidikan Bahasa Inggris (S1)" },
    { no: 8, noPendaftaran: "20252103", nama: "Aisyah Novita", fakultas: "FBS", jalurMasuk: "Mandiri", departemen: "Sendratasik", prodi: "Pendidikan Seni Musik (S1)" },
    { no: 9, noPendaftaran: "20252104", nama: "Muhammad Fajar", fakultas: "FBS", jalurMasuk: "SNBP", departemen: "Seni Rupa", prodi: "Pendidikan Seni Rupa (S1)" },
    { no: 10, noPendaftaran: "20252105", nama: "Rina Safitri", fakultas: "FBS", jalurMasuk: "SNBT", departemen: "Seni Rupa", prodi: "Desain Komunikasi Visual (S1)" },
    
    // Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)
    { no: 12, noPendaftaran: "20253102", nama: "Ilham Fauzi", fakultas: "FMIPA", jalurMasuk: "SNBT", departemen: "Matematika", prodi: "Pendidikan Matematika (S1)" },
    { no: 13, noPendaftaran: "20253103", nama: "Siti Azzahra", fakultas: "FMIPA", jalurMasuk: "Mandiri", departemen: "Kimia", prodi: "Pendidikan Kimia (S1)" },
    { no: 14, noPendaftaran: "20253104", nama: "M. Rizki Aditya", fakultas: "FMIPA", jalurMasuk: "SNBP", departemen: "Biologi", prodi: "Pendidikan Biologi (S1)" },
    { no: 15, noPendaftaran: "20253105", nama: "Zahra Putri", fakultas: "FMIPA", jalurMasuk: "SNBT", departemen: "Statistika", prodi: "Statistika (S1)" },
    
     // Fakultas Teknik (FT)
    { no: 17, noPendaftaran: "20253402", nama: "Dwi Prasetyo", fakultas: "FT", jalurMasuk: "SNBT", departemen: "Teknik Mesin", prodi: "Teknik Mesin (S1)" },
    { no: 18, noPendaftaran: "20253403", nama: "Syifa Ramadhani", fakultas: "FT", jalurMasuk: "Mandiri", departemen: "Teknik Sipil", prodi: "Teknik Sipil (S1)" },
    { no: 19, noPendaftaran: "20253404", nama: "Rizky Ananda", fakultas: "FT", jalurMasuk: "SNBP", departemen: "Teknik Elektro", prodi: "Teknik Elektro (S1)" },
    { no: 20, noPendaftaran: "20253405", nama: "Luthfi Maulana", fakultas: "FT", jalurMasuk: "SNBT", departemen: "Teknik Pertambangan", prodi: "Teknik Pertambangan (S1)" },

    // Fakultas Ekonomi dan Bisnis (FEB)
    { no: 22, noPendaftaran: "20254102", nama: "Muhammad Faris", fakultas: "FEB", jalurMasuk: "SNBT", departemen: "Akuntansi", prodi: "Akuntansi (S1)" },
    { no: 23, noPendaftaran: "20254103", nama: "Rizka Amelia", fakultas: "FEB", jalurMasuk: "Mandiri", departemen: "Akuntansi", prodi: "Ekonomi Pembangunan (S1)" },
    { no: 24, noPendaftaran: "20254104", nama: "Bagas Pratama", fakultas: "FEB", jalurMasuk: "SNBP", departemen: "Manajemen", prodi: "Manajemen Pajak (S1)" },
    { no: 25, noPendaftaran: "20254105", nama: "Nadia Safira", fakultas: "FEB", jalurMasuk: "SNBT", departemen: "Manajemen", prodi: "Manajemen Perdagangan (S1)" },

    // Fakultas Pariwisata dan Perhotelan (FPP)
    { no: 27, noPendaftaran: "20255102", nama: "Rivaldo Pranata", fakultas: "FPP", jalurMasuk: "SNBT", departemen: "Pariwisata", prodi: "Pariwisata (S1)" },
    { no: 28, noPendaftaran: "20255103", nama: "Daffa Mahardika", fakultas: "FPP", jalurMasuk: "Mandiri", departemen: "Ilmu Kesejahteraan Keluarga", prodi: "Ilmu Kesejahteraan Keluarga (S1)" },
    { no: 29, noPendaftaran: "20255104", nama: "Sabrina Oktavia", fakultas: "FPP", jalurMasuk: "SNBP", departemen: "Ilmu Kesejahteraan Keluarga", prodi: "Pendidikan Vokasi Seni Kuliner (S1)" },
    { no: 30, noPendaftaran: "20255105", nama: "Rian Aditya", fakultas: "FPP", jalurMasuk: "SNBT", departemen: "Pariwisata", prodi: "Manajemen Perhotelan (S1)" },

    // Fakultas Psikologi dan Kesehatan (FPK)
    { no: 32, noPendaftaran: "20258002", nama: "Gilang Ramadhan", fakultas: "FPK", jalurMasuk: "SNBT", departemen: "Psikologi", prodi: "Psikologi (S1)" },
    { no: 33, noPendaftaran: "20258003", nama: "Ariq Mahendra", fakultas: "FPK", jalurMasuk: "Mandiri", departemen: "Keperawatan", prodi: "Keperawatan (S1)" },
    { no: 34, noPendaftaran: "20258004", nama: "Indah Safitri", fakultas: "FPK", jalurMasuk: "SNBP", departemen: "Keperawatan", prodi: "Keperawatan (D3)" },
    { no: 35, noPendaftaran: "20258005", nama: "Fahmi Reza", fakultas: "FPK", jalurMasuk: "SNBT", departemen: "Psikologi", prodi: "Psikologi (S1)" },

    // Fakultas Kedokteran (FK)
    { no: 37, noPendaftaran: "20258902", nama: "Naufal Ardiansyah", fakultas: "FK", jalurMasuk: "SNBT", departemen: "Kedokteran", prodi: "Kedokteran (S1)" },
    { no: 38, noPendaftaran: "20258903", nama: "Intan Ayu", fakultas: "FK", jalurMasuk: "Mandiri", departemen: "Kedokteran", prodi: "Kedokteran (S1)" },
    { no: 39, noPendaftaran: "20258904", nama: "Ardian Syahputra", fakultas: "FK", jalurMasuk: "SNBP", departemen: "Kedokteran Hewan", prodi: "Kedokteran Hewan (S1)" },
    { no: 40, noPendaftaran: "20258905", nama: "Ratna Dewi", fakultas: "FK", jalurMasuk: "SNBT", departemen: "Kedokteran Hewan", prodi: "Kedokteran Hewan (S1)" },

    // Fakultas Ilmu Keolahragaan (FIK)
    { no: 42, noPendaftaran: "20259702", nama: "Zaky Ramadhan", fakultas: "FIK", jalurMasuk: "SNBT", departemen: "Kesehatan dan Rekreasi", prodi: "Pendidikan Jasmani, Kesehatan, dan Rekreasi (S1)" },
    { no: 43, noPendaftaran: "20259703", nama: "Ammar Fadillah", fakultas: "FIK", jalurMasuk: "Mandiri", departemen: "Pendidikan Olahraga", prodi: "Ilmu Keolahragaan (S1)" },
    { no: 44, noPendaftaran: "20259704", nama: "Rizki Ananda", fakultas: "FIK", jalurMasuk: "SNBP", departemen: "Kepelatihan", prodi: "Pendidikan Kepelatihan (S1)" },
    { no: 45, noPendaftaran: "20259705", nama: "Cindy Rahmadani", fakultas: "FIK", jalurMasuk: "SNBT", departemen: "Pendidikan Olahraga", prodi: "Ilmu Keolahragaan (S1)" },

    // Fakultas Ilmu Sosial (FIS)
    { no: 47, noPendaftaran: "20252502", nama: "Dinda Puspa", fakultas: "FIS", jalurMasuk: "SNBT", departemen: "Sosiologi", prodi: "Pendidikan Sosiologi (S1)" },
    { no: 48, noPendaftaran: "20252503", nama: "Rina Ayu", fakultas: "FIS", jalurMasuk: "Mandiri", departemen: "Ilmu Sosial Politik", prodi: "Ilmu Politik (S1)" },
    { no: 49, noPendaftaran: "20252504", nama: "Dzikri Ananda", fakultas: "FIS", jalurMasuk: "SNBP", departemen: "Geografi", prodi: "Pendidikan Geografi (S1)" },
    { no: 50, noPendaftaran: "20252505", nama: "Aisyah Putri", fakultas: "FIS", jalurMasuk: "SNBT", departemen: "Administrasi Negara", prodi: "Administrasi Publik (S1)" }
        
];

// **FUNGSI UNTUK MENAMPILKAN DATA MAHASISWA DI TABEL**
function tampilkanMahasiswa(fakultasFilter = null) {
    const dataMahasiswa = document.getElementById("dataMahasiswa");
    if (!dataMahasiswa) return; // Kalau tabelnya gak ada, berhenti

    dataMahasiswa.innerHTML = ""; // Bersihkan tabel sebelum input data baru

    let filteredMahasiswa = mahasiswa;

    if (fakultasFilter) {
        filteredMahasiswa = mahasiswa.filter(mhs => mhs.fakultas === fakultasFilter);
    } else {
        filteredMahasiswa = mahasiswa.slice(0, 10); // Batasi 10 data di index.html
    }

    filteredMahasiswa.forEach((mhs, index) => {
        let kolomTengah;
        
        if (fakultasFilter) {
            // Jika di halaman fakultas, tampilkan jalur masuk
            kolomTengah = `<td>${mhs.jalurMasuk}</td>`;
        } else {
            // Jika di index.html, tampilkan fakultas dengan link
            kolomTengah = `<td><a href="${mhs.fakultas.toLowerCase()}.html" style="color:blue; text-decoration:underline;">${mhs.fakultas}</a></td>`;
        }

        const row = `<tr>
            <td>${index + 1}</td>
            <td>${mhs.noPendaftaran}</td>
            <td>${mhs.nama}</td>
            ${kolomTengah}
            <td>${mhs.departemen}</td>
            <td>${mhs.prodi}</td>
        </tr>`;

        dataMahasiswa.innerHTML += row;
    });
}

// **JALANKAN FUNGSI SAAT HALAMAN SIAP**
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const fakultasFilter = urlParams.get("fakultas");

    const namaFakultasElement = document.getElementById("namaFakultas");
    if (namaFakultasElement && fakultasFilter) {
        namaFakultasElement.innerText = `FAKULTAS ${fakultasFilter.toUpperCase()}`;
    }

    tampilkanMahasiswa(fakultasFilter);
});
