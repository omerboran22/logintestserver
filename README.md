
# Test Node.js Sunucusu

Bu küçük proje, basit bir Express tabanlı sunucu içerir. Aşağıda proje kurulumunu ve nasıl başlatılacağını Windows `cmd.exe` üzerinde adım adım bulabilirsiniz.

## Gereksinimler

- Node.js (tercihen v16+ veya daha yeni). Yüklü olup olmadığını kontrol etmek için:

```bat
node --version
npm --version
```

## Kurulum

1. Proje dizinine gidin (örnek):

```bat
cd C:\Users\admin\Desktop\test
```

2. Bağımlılıkları yükleyin:

```bat
npm install
```

## Sunucuyu Başlatma

Sunucuyu başlatmak için aşağıdaki komutu kullanabilirsiniz:

```bat
npm start
```

Alternatif olarak doğrudan Node ile çalıştırabilirsiniz:

```bat
node server.js
```

Başarılıysa terminalde şu çıktı görünür:

```
Server çalışıyor: http://localhost:3000
```

Sunucu varsayılan olarak 3000 portunda çalışır.

## Kullanım / Test

Projede iki POST endpoint vardır:

- POST /login — form ile gelen `username`, `password` ve opsiyonel `remember` alanlarını alır.
- POST /upload — form ile gelen `file` alanını alır.

Basit bir test için `curl` kullanabilirsiniz (Windows `cmd.exe` üzerinde):

```bat
curl -X POST http://localhost:3000/login -d "username=omer&password=1234"
```

Eğer doğru kullanıcı bilgileri gönderilirse sunucu hoş geldin mesajı dönecektir. Projedeki örnek kullanıcılar `server.js` içinde tanımlıdır (örn: `omer` / `1234`, `mehmet` / `1234`, `halil` / `1234`).

Not: Sunucu body-parser ile `application/x-www-form-urlencoded` tipinde gelen verileri bekler. Postman veya HTML form kullanırken body tipini buna göre ayarlayın.

## Durdurma

Sunucuyu durdurmak için terminalde çalışıyorsa Ctrl+C kombinasyonunu kullanın.

## Dosyalar

- `server.js` — Express sunucusunun kaynak kodu.
- `package.json` — bağımlılıklar ve `start` script'i.

## Sorunlar ve İpuçları

- Eğer 3000 portu zaten kullanımda ise `server.js` içindeki `PORT` değerini değiştirerek farklı bir port kullanabilirsiniz.
- Hata alırsanız terminalde görünen hatayı kopyalayıp paylaşın; yardımcı olurum.

---

Gerekirse README'ye ek örnek istekler veya Windows ortamında Postman/Powershell için alternatif komutlar ekleyebilirim.

