import "./E-Pengomposan.css";
import siklusHidupKompos from "../../assets/siklusHidupKompos.png";

const Pengomposan = () => {
  return (
    <div className="panel">
      <h2>Pengomposan</h2>

      <div className="kompos">
        <div className="kompos-left">
          <p>
            <strong>Apa itu kompos? </strong>
            <br />
            <strong>Kompos</strong> adalah{" "}
            <strong>
              pupuk alami yang dihasilkan dari proses pelapukan bahan organik{" "}
            </strong>{" "}
            (seperti sisa makanan dan daun) oleh mikroorganisme. Proses ini
            disebut pengomposan (composting). Kompos sendiri dibagi menjadi dua
            jenis, yaitu
            <strong>kompos padat</strong> dan <strong>kompos cair</strong>
            , yang masing-masing memiliki manfaat dan cara penggunaan yang
            berbeda. <br />
            <strong>Manfaat Membuat kommpos</strong>
            <br />
            <strong>1. Mengurangi Sampah</strong> : hingga 60%, karena sampah
            dapur dan kebun tidak dibuang ke TPA.
            <br /> <strong>2. Menyuburkan Tanah</strong>: Kompos memperbaiki
            struktur tanah dan menyediakan nutrisi alami bagi tanaman. <br />{" "}
            <strong>3. Ramah Lingkungan</strong>: Mengurangi polusi udara (dari
            pembakaran sampah) dan polusi tanah (dari sampah organik yang
            terbuang). <br /> <strong>4. Ekonomis</strong>: Menghemat
            pengeluaran untuk pupuk kimia
          </p>
        </div>
        <div className="kompos-right">
          <img src={siklusHidupKompos} alt="" />
        </div>
      </div>

      <div className="jenis-kompos">
        <h2>Perbedaan Kompos Padat dan Kompos Cair</h2>
        <div className="kompos-card">
          <div className="card-isi">
            <h3>Kompos Padat</h3>
            <ul>
              <li>
                Pupuk organik padat merupakan hasil dekomposisi bahan organik
                seperti kotoran hewan, daun kering, sekam, atau sisa makanan.
              </li>
              <li>Proses pembuatannya disebut pengomposan</li>
              <li>Fungsinya: Pembenah Tanah (Soil Condition)</li>
              <li>Waktu pembuatan lebih lama sekitar 2-4 minggu</li>
            </ul>
          </div>
          <div className="card-isi">
            <h3>Kompos Cair</h3>
            <ul>
              <li>
                POC (pupuk organik cair) adalah hasil fermentasi bahan organik
                dalam kondisi anaerob (tanpa oksigen) menggunakan aktivator
                seperti EM4
              </li>
              <li>
                Menyediakan unsur hara cepat serap dan hormon pertumbuhan bagi
                tanaman
              </li>
              <li>
                Lebih cepat (10-14 hari) karena proses fermentasi lebih
                sederhana.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pembuatan-kompos">
        <h2>Pembuatan Pupuk Kompos</h2>
        <div className="tutor-kompos">
          <div className="tutor-kompos-card">
            <h3>Alat dan Bahan:</h3>
            <ul>
              <li>Ember/tong/galon bertutup</li>
              <li>Tanah</li>
              <li>Daun kering atau jerami (sampah coklat)</li>
              <li>Sampah kulit buah/sisa sayuran (sampah hijau)</li>
              <li>Larutan EM4 atau M21 (opsional)</li>
            </ul>

            <h3>Langkah-langkah:</h3>
            <ul>
              <li>Siapkan wadah (ember/tong/galon) yang bersih dan kering.</li>
              <li>Masukkan tanah sebagai lapisan pertama (layer 1).</li>
              <li>
                Tambahkan saun kering atau jerami sebagai lapisan kedua (layer
                2).
              </li>
              <li>
                Tambahkan agi tanah hitam sebagai lapisan ketiga (layer 3).
              </li>
              <li>
                Masukkan sampah organik seperti kulit buah atau sisa sayuran
                sebagai lapisan keempat (layer 4).
              </li>
              <li>Tutup kembali dengan lapisan tanah tipis dibagian atas.</li>
              <li>
                Tutup wadah rapat-rapat agar proses pembusukan berjalan baik.
              </li>
              <li>
                Aduk isi wadah setiap seminggu sekali supaya bahan tercampur dan
                tidak bau.
              </li>
              <li>
                Untuk mempercepat pembusukan, tambahkan larutan EM4 atau M21
                sesuai petunjuk.
              </li>
            </ul>
          </div>

          <h2>Pembuatan Pupuk Organik Cair</h2>
          <div className="tutor-kompos-card">
            <h3>Alat dan Bahan:</h3>
            <ul>
              <li>Galon/ ember/ tong berwarna gelap</li>
              <li>Sisa kulit buah dan sayur</li>
              <li>Air bersih</li>
              <li>Larutan EM4</li>
            </ul>

            <h3>Langkah-langkah</h3>
            <ul>
              <li>Siapkan alat dan bahan yang dibutuhkan.</li>
              <li>Potong kecil-kecil sisa kulit buah dan sayur.</li>
              <li>Masukkan potongan tersebut ke dalam galon/ ember/ tong.</li>
              <li>Tambahkan air dan EM4 dengan perbandingan 1:1.</li>
              <li>Aduk campuran hingga rata.</li>
              <li>Tutup wadah dengan rapat.</li>
              <li>
                Buka wadah setiap hari sekali untuk mengeluarkan gas hasil
                fermentasi.
              </li>
              <li>Diamkan selama ±2 minggu untuk proses fermentasi.</li>
              <li>
                Setelah 2 minggu, periksa warna dan aroma pupuk organik cair.
              </li>
              <li>
                Uji pupuk cair tersebut ke tanaman untuk memastikan
                keberhasilannya.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengomposan;
