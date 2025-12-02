import "./E-PemilahanSampah.css";
import sampahOrganik from "../../assets/sampahOrganik.png";
import sampahAnorganik from "../../assets/sampahAnorganik.png";
import sampahB3 from "../../assets/sampahB3.png";

const Pemilahan = () => {
  return (
    <div className="panel">
      <h2>Pemilahan Sampah</h2>

      <div className="pemilahan-wrapper">
        <div className="pemilahan-card">
          <img src={sampahOrganik} alt="" className="jenis-sampah" />
          <h3>Sampah Organik</h3>
          <p>
            (dapat terurai)
            <br /> sisa makanan, kulit buah, daun kering
          </p>
        </div>
        <div className="pemilahan-card">
          <img src={sampahAnorganik} alt="" className="jenis-sampah" />
          <h3>Sampah Anorganik</h3>
          <p>
            (tidak dapat terurai)
            <br /> botol, kardus, plastik, kertas
          </p>
        </div>
        <div className="pemilahan-card">
          <img src={sampahB3} alt="" className="jenis-sampah" />
          <h3>Sampah B3</h3>
          <p>
            (bahan beracun dan berbahaya)
            <br /> obat-obatan, elektronik bekas, baterai bekas
          </p>
        </div>
      </div>

      <div className="isiEdukasiPemilahan">
        <h2>Pemilihan sampah berdasarkan jenis sampah & prinsip 3R</h2>
        <div className="card-isiEdukasiPemilahan">
          <p>
            <strong>1.Klasifikasi Jenis Sampah</strong>
            <br />
            Sampah dapat diklasifikasikan menjadi tiga jenis utama untuk
            memudahkan pengelolaannya: <br /> • <strong>
              Sampah Organik:
            </strong>{" "}
            Berasal dari makhluk hidup (contoh: sisa makanan, daun). Sampah ini
            mudah membusuk <br /> dan dapat diolah lebih lanjut menjadi kompos
            atau pakan ternak.
            <br />• <strong>Sampah Anorganik:</strong> Berasal dari bahan
            non-hayati (contoh: plastik, kertas, kaca, logam). Sampah ini sulit{" "}
            <br /> terurai tetapi dapat didaur ulang atau digunakan kembali.
            <br />• <strong>
              Sampah B3 (Bahan Berbahaya dan Beracun):
            </strong>{" "}
            Mengandung bahan kimia berbahaya (contoh: baterai, lampu neon, obat
            kadaluarsa, elektronik rusak). Sampah ini memerlukan penanganan
            khusus dan tidak boleh <br /> dicampur dengan sampah rumah tangga
            biasa karena dapat mencemari lingkungan dan membahayakan kesehatan.
            <br />
            <strong>2.Prinsip 3R untuk Pengelolaan Sampah yang Bijak</strong>
            <br />
            Prinsip 3R adalah konsep utama untuk mengurangi timbunan sampah dan
            melestarikan lingkungan.
            <br />• <strong> Reduce (Kurangi)</strong>: Mengurangi jumlah sampah
            dari sumbernya. Contoh: Membawa tas belanja sendiri dan menghindari
            barang sekali pakai.
            <br />• <strong> Reuse (Gunakan Kembali)</strong>: Memanfaatkan
            kembali barang-barang yang masih bisa dipakai sebelum akhirnya
            dibuang. Contoh: Menggunakan botol kaca bekas sebagai wadah
            penyimpanan.
            <br />• <strong> Recycle (Daur Ulang)</strong>: Mengolah kembali
            menjadi bahan baku atau produk baru. Contoh: Mendaur ulang kertas
            bekas dan botol plastik.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pemilahan;
