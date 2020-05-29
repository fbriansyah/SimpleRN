# Simple React Native App

## Struktur project

Code utama react native berada didalam folder src. keterangan folder:
- api: Folder yang berisi script yang berhubungan dengan api server.
- components: Folder yang berisi seluruh component pada aplikasi.
- contexts: Folder yang berisi setting context. Context digunakan untuk sharing data
  antar component.
- theme: Folder berisi setting dan pre-define theme.
- utils: Folder berisi script/fungsi yang dapat membatu coding.

## Menjalankan Aplikasi

* Clone project `git clone https://github.com/fbriansyah/SimpleRN`
* Masuk ke folder SimpleRN `cd SimpleRN`
* Install dependencies `npm install` atau `yarn install`
* Menjalankan metro server untuk compile js `npm start` atau `yarn start`
* Menjalankan aplikasi ios `npm run ios` atau `yarn ios`
* Menjalankan aplikasi android `npm run android` atau `yarn android`

## Menjalankan Fake Api Server
Api server menggunakan jsonserver, didalam direktori _project_ terdapat fakedb.json yang menjadi
database dummy. Cara menggunakan json server dan fakedb api.

1. Install json-server secara gloabal `npm install -g json-server`
2. Jalankan json-server dengan _command_ `npm run server` atau `yarn server`