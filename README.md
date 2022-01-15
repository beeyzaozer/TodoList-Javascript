# TodoList-Javascript
Kodluyoruz FrontEnd Web Geliştirme kursu kapsamında, HTML ve CSS kodları hazır verilmiş olan bir To-Do List projesini Javascript kullanarak dinamik hale getirmeye çalıştım.
-----------

+ Projede yapılması gerekilenler 
  * Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
  * Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
  * Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
  * Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.
  * Yazdığınız js dosyasını projenize eklemeyi unutmayın.
+ İlk olarak terminale git clone yazarak projemi klonlayabilirsiniz.

-----------

````
git clone https://github.com/beeyzaozer/TodoList-Javascript

````

![](ss/done.png)

-----------

+ List id'li ul etiketimizin içine li elementlerini eklememiz gerekiyor. Önce items isimli boş bir array oluşturuyoruz. Daha sonra CreateItem fonksiyonu içinde dinamik olarak li elementi oluşturuyoruz.
+ Oluşturduğumuz elementi x butonuna tıklandığında silmemizi sağlayan function 

````
span.onclick = () => {
            span.parentElement.remove();
        }
````

-----------


+ Li elementinin üstüne tıklandığında üzerini çizmemizi sağlayan function. Burada aslında gizli olan classListi toogle ile görünür hale getiriyoruz.

````
listBox.addEventListener("click", (item)  => {
    if (item.target.tagName = "li") {
        item.target.classList.toggle("checked");
    }
});

````
![](ss/checked.png)


----------------------


+ ForEach methodu ile oluşturduğumuz her li elemanını arrayimize döndürüyoruz.

````
items.forEach((item) => {
    createItem(item);
    });

````

-----------

+ Inputa girilen değeri aldığımız function. Aynı zamanda inputa girilen değerin boş olup olmadığını kontrol ediyor.

````
  if (item.value === "" || item.value === " ") { // if item is empty, show toast error message
            $(".error").toast("show");
            
    }else{  // else show success toast message and run creat function
        $(".success").toast("show");
        createItem(item);    
        
    }
````


![](ss/toastMessage.png)



