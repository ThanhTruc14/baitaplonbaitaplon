// add 4 Best Sellers
let BestSeller = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'b',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

BestSeller.add('../img/sofa3.jpg',
'Sofa 2 chỗ Hà Nội',
'Sofa',
'15900000',
`Kích thước: D1800 - R840 - C800 mm
Vật liệu(Giá không bao gồm gối trang trí): Gỗ Beech bọc vải nhập khẩu cao cấp`,
'24 Tháng kể từ ngày sản xuất');

BestSeller.add('../img/banan1.jpg',
'Bàn ăn 8 chỗ Ogami',
'Bàn ăn',
'16900000',
`Vật liệu: Gỗ Beech, MDF chống ẩm veneer Beech
Kích thước: D2200 - R1000 - C750 mm`,
'3 năm kể từ ngày sản xuất');

BestSeller.add('../img/g1.jpg',
`Giường Leman 1m8 vải VACT11303`,
'Giường ngủ',
'33650000',
`Vật liệu: Khung gỗ - Bọc vải cao cấp
Kích thước: D2000 - R1800 - C1070 mm`,
'18 Tháng kể từ ngày sản xuất');

BestSeller.add('../img/b1.jpg',
`Bàn làm việc Skagen`,
'Bàn làm việc',
'13000000',
`Collection: Skagen
Kích thước: D1200 - R600 - C750 mm
Vật liệu: MDF Chống ẩm, Veneer walnut, Chân gỗ Walnut`,
'3 năm kể từ ngày sản xuất')

BestSeller.add('../img/den1.jpg',
`Đèn bàn Float 5200110Z`,
'Đèn trang trí',
'9490000',
`Vật liệu: Sắt
Kích thước: Ø300 - C420 mm`,
'20 tháng kể từ ngày sản xuất')

BestSeller.add('../img/sofa2.jpg',
`Sofa Hùng King 3 chỗ + Gối VACT3231`,
'Sofa',
'25900000',
`Kích thước: D1885 - R745 - C755 mm
Vật liệu: Gỗ Beech tự nhiên, mây công nghiệp, bọc vải`,
'18 tháng kể từ ngày sản xuất')

BestSeller.add('../img/banan2.jpg',
`Bàn ăn 8 chỗ Moretti`,
'Bàn ăn',
'59000000',
`Vật liệu: Chân kim loại sơn hiệu ứng, mặt đá
Kích thước: D2250 - R950 - C750 mm`,
'2 năm kể từ ngày sản xuất')

localStorage.setItem('BestSellers', JSON.stringify(BestSeller.arr));

let FeatureProduct = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'f',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

FeatureProduct.add('../img/sofa1.jpg',
`Sofa 2 chỗ Ogami vải vact10504`,
'Sofa',
`12900000`,
`Vật liệu: Gỗ Beech bọc vải cao cấp
Kích thước: D1440 - R720 - C730 mm`,
'18 Tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/banan3.jpg',
`Bàn ăn Breeze mặt kính bronze/GM2`,
'Bàn ăn',
`207900000`,
`Kích thước: D2490 - R1190 - C760
Vật liệu: Chân kim loại màu Bronze, kính cường lực màu Bronze`,
'2 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/g2.jpg',
`Giường Leman 1m8 vải VACT4328`,
'Giường ngủ',
`33650000`,
`Vật liệu: Khung gỗ - Bọc vải cao cấp
Kích thước: D2000 - R1800 - C1070 (mm)`,
'36 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/b2.jpg',
`Bàn Làm Việc Match`,
'Bàn làm việc',
`43380000`,
`Kích thước: D1300-R650-C750mm
Chất liệu: MDF Veneer Gỗ tự nhiên sơn lacquer`,
'2 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/den2.jpg',
`Đèn sàn Gol Met/Glass`,
'Đèn trang trí',
`13190000`,
`Vật liệu: Kim loại - thủy tinh
Kích thước: D1540 - R360 - C360 mm`,
'3 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/sofa4.jpg',
`Sofa 2 chỗ Mây mới`,
'Sofa',
`19900000`,
`Kích thước: D1690 - R760 - C700 mm
Vật liệu: Gỗ beech tự nhiên - Nệm bọc vải nhập khẩu cao cấp - Mây tự nhiên màu trắng gồm 5 gối trang trí`,
'36 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/banan4.jpg',
`Bàn ăn Cult 6 chỗ`,
'Bàn ăn',
`7990000`,
`Kích thước: D1400- R800- C750 mm
Vật liệu: Chân bàn Aluminium sơn tĩnh điện, mặt bàn gỗ HPL`,
'3 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/g3.jpg',
`Giường Miami 1m6 vải VADELA165`,
'Giường ngủ',
`19300001`,
`Vật liệu: Gỗ sồi tự nhiên - MDF chống ẩm - Vải cao cấp
Kích thước: D2000 - R1600 - C1210 mm`,
'3 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/b3.jpg',
`Bàn làm việc Layers`,
'Bàn làm việc',
`43380000`,
`Kích thước: D1620-R720-C880mm
Vật liệu: Chân kim loại - MDF Veneer`,
'2 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/den3.jpg',
`Đèn bàn Gianfranco Gunmetal`,
'Đèn trang trí',
`32880000`,
`Kích thước: 170x410x630 mm`,
'36 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/sofa5.jpg',
`Sofa 3 chỗ Orientale da beige R5`,
'Sofa',
`135750000`,
`Vật liệu: Khung gỗ Walnut tự nhiên - Nệm bọc da bò tự nhiên cao cấp màu Beige R5
Kích thước: D2300 - R945 - C390/780 mm`,
'48 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/banan5.jpg',
`Bàn ăn Mây mới 8 chỗ`,
'Bàn ăn',
`16900000`,
`Kích thước: D2200 - R900 - C740 mm
Vật liệu: Gỗ Beech kết hợp mdf veneer beech - Chân bàn khung gỗ Beech kết hợp mây tự`,
'24 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/g4.jpg',
`Giường Ona Him 1m8 da nâu S3`,
'Giường ngủ',
`66900000`,
`Kích thước: D2000 - R1800 - C940 mm
Vật liệu: Gỗ sồi tự nhiên, bọc da bò cao cấp màu nâu`,
'36 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/b4.jpg',
`Bàn làm việc Biblio`,
'Bàn làm việc',
`55870001`,
`Kích thước: D1040- R530- C1020
Vật liệu: Chân kim loại, MDF, Da`,
'3 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/den4.jpg',
`Đèn bàn Jeff`,
'Đèn trang trí',
`4980000`,
`Vật liệu: Metal
Kích thước: D320 - R320 - C480 mm`,
'2 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/sofa6.jpg',
`Sofa 3 chỗ vải Vegas`,
'Sofa',
`25900000`,
`Kích thước: D2200 - R920 - C720 mm
Vật liệu: Chân kim loại - Nệm bọc vải - Bao gồm 3 gối trang trí`,
'30 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/banan6.jpg',
`Bàn ăn Peak hiện đại mặt Ceramic vân mây`,
'Bàn ăn',
`44970000`,
`Vật liệu: Chân composite không thấm nước Mặt bàn Ceramic nhập khẩu Ý chịu nhiệt
Kích thước: D2000 - R1000 - C750 mm`,
'3 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/g5.jpg',
`Giường Leman 1m8 vải VACT7464`,
'Giường ngủ',
`33655000`,
`Vật liệu: Khung gỗ - Bọc vải cao cấp
Kích thước: D2000 - R1800 - C1070 (mm)`,
'24 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/b5.jpg',
`Bàn làm việc Wing màu trắng`,
'Bàn làm việc',
`14650000`,
`Vật liệu: Chân kim loại sơn trắng - mặt gỗ - MDF Sồi bo cong cạnh
Kích thước: D1300 - R650 - C750 mm`,
'2 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/den5.jpg',
`Đèn trần Universe Chrome`,
'Đèn trang trí',
`19900000`,
`Vật liệu: Gắn được 9 bóng max 28W - thủy tinh - kim loại
Kích thước: D1350 - R350 - C1050 mm`,
'30 tháng kể từ ngày sản xuất');

localStorage.setItem('FeatureProduct', JSON.stringify(FeatureProduct.arr));