let storyIndex = 0;

function showStory() {
    const stories = [
        "Kayaknya serba tiba tiba deh WKWKWKAK, YAGASKIH???, cewe yang 1 kelas dan bahkan dulu ga kepikiran bisa sampe jadi kaya sekarang. Salah satu perempuan yang keberadaannya bisa dibilang tipis wkwkwkk, ya mungkin aku baru sadar ada dia itu tingkat 2 deh.",
        "Jujur masih jadi misteri awal mula chat kita, pertama kali chat siapa duluan, kita chattan tentang apa dll wkwkwkk, kenapa jadi misteri? Karna semuanya dah ilang. Dari HP dia yang ganti dan HP aku yang berenang WKWKWKWKWKWK, penasaran banget dulu ngobrol apa aja yah, ko bisa jadi kaya sekarang? Wkwkwkkw yaudah gapapa.",
        "Cerita sedikit tentang ni cewe yang super ovt, bahkan cuma mikirin besok ke kampus atau nggak aja sampe kepikiran sampe ke mimpi tapi itu salah satu yang aku suka. Tingkah bodor dan so jaim padahalmah dalem pikirannya udh tantrum keliatan bangettt wkwkwkwk, tapi ya balik lagi, itu salah satu yang aku suka.",
        "Kayaknya aku membawa pengaruh buruk ke dia wkwkwk, dari yang jam tidurnya jam 8 malem sekarang sering banget tahan sampe tengah malem, ya walau kadang tiba tiba ngilangsih tapi gapapa.",
        "Semangat terus ya sayaaanggg, apapun yang kamu pilih, apapun yang kamu lakukan aku selalu dukung kamuuu",
        "Seneng bangeeettt aku ketemu sama dia :) nyaman nyaman yaahhh sama akuuu."
    ];

    const storyDiv = document.getElementById("story");

    if (storyIndex < stories.length) {
        storyDiv.innerHTML = stories[storyIndex];
        storyDiv.style.display = "block";
        storyIndex++;
    } else {
        storyDiv.innerHTML = "I love You sayaaanggg ❤️";
        storyDiv.style.display = "block";
        
        // Nonaktifkan tombol setelah semua cerita terbaca
        const button = document.querySelector("button");
        button.disabled = true;
        button.style.backgroundColor = "#ddd";
        button.style.cursor = "not-allowed";
    }

    // Ubah teks tombol setelah cerita pertama terbaca
    const button = document.querySelector("button");
    if (storyIndex < stories.length) {
        button.innerHTML = "Selanjutnya";
    }
}
