### Example Express JS With Redux

**Berikut** adalah contoh sederhana cara pengunaan dasar pada `Redux` menggunakan `Express Js` semoga dengan adanya ini anda bisa memahami fungsi dari `Redux` itu sendiri, sebelum anda mengunakannya pada `React Js Application` atau yang lainnya.

#### Penjelasan Apa itu Redux ? :

**Redux** adalah sebuah `Library JavaScript` untuk memanagement sebuah state pada aplikasi, jika aplikasi tersebut tidak lagi memungkinkan untuk memanagement sebuah state, jika aplikasi tersebut sudah semakin besar dan kompleks, maka dari itu kita sudah harus menggunakan `Redux` untuk memanagement state, agar lebih rapih dan terstruktur.

#### Cara Menjalankan Aplikasi :

**Install** module terlebih dahulu sesuai dengan apa yang tertera di `package.json`, kemudian buka terminal dan silahkan ketikan `npm install` atau `yarn add`, setelah selesai menginstall module tersebut lalu silahkan jalankan dengan cara mengetikan `npm start` atau `yarn start`, ada baiknya sebelum anda menjalankan nya, silahkan ketikan `npm run build` atau `yarn run build` terlebih dahulu agar aplikasi bisa berjalan.

#### Penjelasan Fungsi Pada Redux :

* **Action** adalah sebuah tindakan untuk mengirimkan muatan informasi dari aplikasi menggunakan `store.dispatch()`

* **Reducers** adalah dimana suatu keadaan aplikasi itu akan berubah, sesuai permintaan yang diberikan oleh store yang dikirimkan melalui **action**

* **Store** adalah tempat yang berisi kumpulan `state`, `reducer` dan `action` untuk memanagement sebuah data

#### Penjelasan Fungsi Method Pada Redux :

* **getState** berfungsi untuk mengakses nilai dari state 

* **dispatch** berfungsi untuk memperbarui state untuk mendapatkan nilai baru

* **subcribe** berfungsi sebagai pendengar jika terjadi suatu perubahan atau pembatalan pada state

* **combineReducers** berfungsi untuk mengabungkan banyak reducers menjadi satu, jika memiliki lebih dari satu reducers

* **createStore** berfungsi untuk menginisialisasi store dan menjalankan reducers

* **applyMiddleware** berfungsi untuk menjalankan module pihak ketiga pada aplikasi atau untuk menjalankan sebuah fungsi lain

* **replaceReducer** berfungsi untuk mengantikan reducers yang lama menjadi reducers yang baru