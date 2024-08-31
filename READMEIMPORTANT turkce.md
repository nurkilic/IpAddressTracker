# Frontend Mentor - IP Adresi Takipçi

![IP adresi takipçisi kodlama meydan okuması için tasarım önizlemesi](./design/desktop-preview.jpg)

## Hoş Geldiniz! 👋

Bu front-end kodlama meydan okumasını incelediğiniz için teşekkür ederiz.

[Frontend Mentor](https://www.frontendmentor.io) meydan okumaları, gerçekçi projeler oluşturarak kodlama becerilerinizi geliştirmenize yardımcı olur.

**Bu meydan okumayı yapmak için HTML, CSS ve JavaScript hakkında temel bir anlayışa ihtiyacınız olacak.**

## Meydan okuma

Bu meydan okumanız, bu IP Adresi Takipçi uygulamasını oluşturmak ve onu tasarıma olabildiğince yakın hale getirmektir. IP Adresi konumlarını almak için [IPify tarafından sağlanan IP Coğrafi Konum API'sini](https://geo.ipify.org/) kullanacaksınız. Harita oluşturmak için ise [LeafletJS](https://leafletjs.com/) kullanmanızı öneririz.

Bu meydan okumayı tamamlamanıza yardımcı olacak herhangi bir aracı kullanabilirsiniz. Bu yüzden, pratik yapmak istediğiniz bir şey varsa, denemekten çekinmeyin.

Kullanıcılarınız şunları yapabilmelidir:

- Cihazlarının ekran boyutuna bağlı olarak her sayfanın optimal düzenini görebilmelidir.
- Sayfadaki tüm etkileşimli öğeler için hover durumlarını görebilmelidir.
- İlk sayfa yüklendiğinde kendi IP adreslerini harita üzerinde görebilmelidir.
- Herhangi bir IP adresini veya alan adını arayabilmeli ve anahtar bilgileri ve konumu görebilmelidir.

---

⚠️ **ÖNEMLİ** ⚠️: IPify tarafından sağlanan IP Coğrafi Konum API'sini kullanmak için ücretsiz bir hesap oluşturmanız gerekecek. Bunu yapmak için kredi kartı bilgilerinizi girmenize gerek yoktur ve bu oldukça hızlı bir işlemdir. Bu size bir API Anahtarı verecektir. Genellikle, API Anahtarınızı belirli bir URL'ye (kendi alan adınız) kısıtlayabilirsiniz. Bu, başkalarının API Anahtarınızı kendi web sitelerinde kullanmalarını engeller. IPify bu özelliğe sahip değildir, ancak kredi kartı bilgilerinizi girmediğiniz için bu bir sorun değildir. **Bu yüzden sadece ücretsiz hesap oluşturduğunuzdan emin olun ve KESİNLİKLE kredi kartı bilgilerinizi girmeyin**.

Harita API'si için [LeafletJS](https://leafletjs.com/) kullanmanızı öneririz. Kullanımı ücretsizdir ve bir API Anahtarı gerektirmez. Başka bir API kullanmaya karar verirseniz, örneğin Google Maps veya Mapbox gibi, API Anahtarınızı güvenli hale getirdiğinizden emin olun. Hem Google Maps hem de Mapbox için kılavuzlar burada, bunları dikkatlice okuyun:

- [Google Developers'tan API Anahtarı en iyi uygulamaları](https://developers.google.com/maps/api-key-best-practices)
- [Mapbox'u güvenli bir şekilde nasıl kullanılır](https://docs.mapbox.com/help/troubleshooting/how-to-use-mapbox-securely/)

API Anahtarınızı herkese açık olarak ifşa etmek, diğer insanların kendi uygulamaları için istekler yapmak amacıyla anahtarınızı kullanmasına yol açabilir. Lütfen kılavuzları dikkatlice okuyun ve tavsiyelerine uyun.

**Meydan okumayı tamamlarken API Anahtarınızı ifşa ederseniz ve güvenli hale getirmezseniz, sorumluluk kabul etmiyoruz.**

---

Meydan okuma hakkında destek almak ister misiniz? [Topluluğumuza katılın](https://www.frontendmentor.io/community) ve **#help** kanalında sorularınızı sorun.

## Her şeyi nerede bulabilirsiniz

Göreviniz, `/design` klasörü içindeki tasarımlara göre projeyi oluşturmaktır. Hem mobil hem de masaüstü versiyon tasarımlarını bulacaksınız.

Tasarım dosyaları JPG statik formatındadır. JPG'leri kullanmak, `font-size`, `padding` ve `margin` gibi stiller için en iyi kararı vermenizi gerektirir.

Tasarım dosyalarını (Sketch & Figma versiyonlarını sunuyoruz) daha ayrıntılı olarak incelemek isterseniz, [PRO üye olarak abone olabilirsiniz](https://www.frontendmentor.io/pro).

Gereken tüm varlıkları `/images` klasöründe bulacaksınız. Varlıklar zaten optimize edilmiştir.

Ayrıca, renk paleti ve yazı tipleri gibi ihtiyacınız olacak bilgileri içeren bir `style-guide.md` dosyası da bulunmaktadır.

## Projenizi Oluşturma

Kendinizi rahat hissettiğiniz herhangi bir iş akışını kullanabilirsiniz. Aşağıda önerilen bir süreç yer alıyor, ancak bu adımları takip etmek zorunda hissetmeyin:

1. Projenizi [GitHub](https://github.com/) üzerinde bir genel depo olarak başlatın. Depo oluşturmak, topluluktan yardım almanız gerektiğinde kodunuzu paylaşmayı kolaylaştıracaktır. Bunu nasıl yapacağınızdan emin değilseniz, [bu Try Git kaynağını inceleyin](https://try.github.io/).
2. Depolarınızı, kodunuzu bir web adresine yayınlayacak şekilde yapılandırın. Bu, bir meydan okuma sırasında yardım almanız gerektiğinde projenizin URL'sini ve depo URL'sini paylaşmak için de faydalı olacaktır. Bunu yapmanın birkaç yolu vardır ve aşağıda bazı öneriler sunuyoruz.
3. Tasarımları inceleyerek projeyi nasıl ele alacağınızı planlamaya başlayın. Bu adım, tekrar kullanılabilir stiller oluşturmak için CSS sınıflarını düşünmenize yardımcı olması açısından önemlidir.
4. Herhangi bir stil eklemeden önce, içeriğinizi HTML ile yapılandırın. Öncelikle HTML yazmak, iyi yapılandırılmış içerik oluşturmaya odaklanmanıza yardımcı olabilir.
5. Projeniz için temel stilleri yazın, genel içerik stilleri, örneğin `font-family` ve `font-size` gibi.
6. Sayfanın üstünden başlayarak aşağı doğru stiller eklemeye başlayın. Üzerinde çalıştığınız alanı tamamladığınızdan emin olmadan bir sonraki bölüme geçmeyin.

## Projenizi Yayınlama

Yukarıda belirtildiği gibi, projenizi ücretsiz olarak barındırmanın birçok yolu vardır. Önerdiğimiz barındırma hizmetleri şunlardır:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

Projenizi bu çözümlerden biriyle veya diğer güvenilir sağlayıcılarımızdan biriyle barındırabilirsiniz. [Önerdiğimiz ve güvenilir barındırma sağlayıcılarımız hakkında daha fazla bilgi edinin](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Özel bir `README.md` oluşturun

Bu `README.md` dosyasını özel bir dosyayla değiştirmeyi kesinlikle öneriyoruz. Başlangıç kodu içinde [`README-template.md`](./README-template.md) dosyası içinde bir şablon sağladık.

Bu şablon, eklemeniz gereken bilgiler için bir rehber sunar. Özel bir `README`, projenizi açıklamanıza ve öğrendiklerinizi yansıtmanıza yardımcı olacaktır. Şablonumuzu istediğiniz kadar düzenlemekten çekinmeyin.

Bilgilerinizi şablona ekledikten sonra, bu dosyayı silin ve `README-template.md` dosyasının adını `README.md` olarak değiştirin. Bu, deponuzun README dosyası olarak görünmesini sağlayacaktır.

## Çözümünüzü Gönderme

Çözümünüzü platforma gönderin, böylece topluluğun geri kalanı görebilir. Çözümleri nasıl göndereceğinize dair ipuçları için ["Çözüm göndermeye dair tam kılavuz"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) makalemizi inceleyin.

Çözümünüz hakkında geri bildirim almak istiyorsanız, çözümünüzü gönderirken soru sorduğunuzdan emin olun. Sorularınız ne kadar spesifik ve detaylı olursa, topluluktan değerli geri bildirim alma şansınız o kadar yüksek olur.

## Çözümünüzü Paylaşma

Çözümünüzü paylaşabileceğiniz birden fazla yer vardır:

1. [Topluluğun](https://www.frontendmentor.io/community) **#finished-projects** kanalında çözüm sayfanızı paylaşın.
2. [@frontendmentor](https://twitter.com/frontendmentor) hesabına tweet atın ve **@frontendmentor**'u etiketleyin, tweet'te depo ve canlı URL'lerinizi ekleyin. İnşa ettiğiniz şeyi görmek ve paylaşmak isteriz.
3. Çözümünüzü LinkedIn gibi diğer platformlarda paylaşabilirsiniz.
