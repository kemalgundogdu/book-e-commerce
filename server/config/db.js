const mongoose = require("mongoose");

module.exports = connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bookstore");
    console.log("MongoDB bağlantısı başarılı");
  } catch (error) {
    console.error("MongoDB bağlantı hatası:", err);
    process.exit(1); // Hata durumunda uygulamayı kapatır
  }
};