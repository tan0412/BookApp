
import React, {useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  StatusBar
} from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { getImageSourceProperties } from 'react-native/Libraries/Image/ImageSource';
import images from '../constants/images';
import BookList from '../component/BookList';
const Home = ({navigation}) => {
const a =  {id:"1",name:"Con Chim Xanh Biếc Bay Về",price:"60000",NXB:"Nhà xuất bản Trẻ",nation:"Việt Nam",category:"Văn Học",ddcCode:"800",description:"Không giống như những tác phẩm trước đây lấy bối cảnh vùng quê miền Trung đầy ắp những hoài niệm tuổi thơ dung dị, trong trẻo với các nhân vật ở độ tuổi dậy thì, trong quyển sách mới lần này nhà văn Nguyễn Nhật Ánh lấy bối cảnh chính là Sài Gòn – Thành phố Hồ Chí Minh nơi tác giả sinh sống (như là một sự đền đáp ân tình với mảnh đất miền Nam). Các nhân vật chính trong truyện cũng “lớn” hơn, với những câu chuyện mưu sinh lập nghiệp lắm gian nan thử thách của các sinh viên trẻ đầy hoài bão. Tất nhiên không thể thiếu những câu chuyện tình cảm động, kịch tính và bất ngờ khiến bạn đọc ngẩn ngơ, cười ra nước mắt. Và như trong mọi tác phẩm Nguyễn Nhật Ánh, sự tử tế và tinh thần hướng thượng vẫn là điểm nhấn quan trọng trong quyển sách mới này.",img: images.image1,author:"Tác giả A",quantityImported:"100",quantityExported:"100"}
const b = {id:"2",name:"Dấu Chân Trên Cát",price:"40000",NXB:"Nhà xuất bản Tổng Hợp TPHCM",nation:"Việt Nam",category:"Văn Học",ddcCode:"800",description:"“Dấu chân trên cát” là tác phẩm được dịch giả Nguyên Phong phóng tác kể về xã hội Ai Cập thế kỷ thứ XIV trước CN, qua lời kể của nhân vật chính -  Sinuhe.  Ngày nay, người ta biết đến triều đại các vua chúa Ai Cập thời cổ qua sách vở của người Hy Lạp. Sở dĩ các sử gia Hy Lạp biết được các chi tiết này vì họ đã học hỏi từ người Ai Cập bị đày biệt xứ tên là Sinuhe. Đây là một nhân vật lạ lùng, đã có công mang văn minh Ai Cập truyền vào Hy Lạp khi quốc gia này còn ở tình trạng kém mở mang so với Ai Cập lúc đó.  Các sử gia ngày nay đã đưa ra nhiều giả thuyết về nhân vật Sinuhe này. Có người cho rằng ông là một lái buôn đến Hy Lạp lập nghiệp, nhưng làm sao lái buôn lại mở trường dạy học và để lại nhiều tài liệu quý giá như thế được? Từ ngàn xưa,  chỉ riêng giai cấp vua chúa là giáo sĩ mới được hưởng quy chế giáo dục toàn vẹn như vậy mà thôi.",img: images.image2,author:"Tác giả A",quantityImported:"100",quantityExported:"100"}
  
const c = {id:"4",name:"Cho Tôi Xin Một Vé Đi Tuổi Thơ",price:"100000",NXB:"Nhà xuất bản Trẻ",nation:"Việt Nam",category:"Văn Học",ddcCode:"800",description:"Trong Cho tôi xin một vé đi tuổi thơ, nhà văn Nguyễn Nhật Ánh mời người đọc lên chuyến tàu quay ngược trở lại thăm tuổi thơ và tình bạn dễ thương của 4 bạn nhỏ. Những trò chơi dễ thương thời bé, tính cách thật thà, thẳng thắn một cách thông minh và dại dột, những ước mơ tự do trong lòng… khiến cuốn sách có thể làm các bậc phụ huynh lo lắng rồi thở phào. Không chỉ thích hợp với người đọc trẻ, cuốn sách còn có thể hấp dẫn và thực sự có ích cho người lớn trong quan hệ với con mình.",img: images.image4,author:"Tác giả A",quantityImported:"100",quantityExported:"100"}
const d = {id:"5",name:"Bước Chậm Lại Giữa Thế Gian Vội Vã",price:"150000",NXB:"Nhà xuất bản Hội Nhà Văn",nation:"Hàn Quốc",category:"Văn Học",ddcCode:"800",description:"Chen vai thích cánh để có một chỗ bám trên xe buýt giờ đi làm, nhích từng xentimét bánh xe trên đường lúc tan sở, quay cuồng với thi cử và tiến độ công việc, lu bù vướng mắc trong những mối quan hệ cả thân lẫn sơ… bạn có luôn cảm thấy thế gian xung quanh mình đang xoay chuyển quá vội vàng?  Nếu có thể, hãy tạm dừng một bước.  Để tự hỏi, là do thế gian này vội vàng hay do chính tâm trí bạn đang quá bận rộn? Để cầm cuốn sách nhỏ dung dị mà lắng đọng này lên, chậm rãi lật giở từng trang, thong thả khám phá những điều mà chỉ khi bước chậm lại mới có thể thấu rõ: về các mối quan hệ, về chính bản thân mình, về những trăn trở trước cuộc đời và nhân thế, về bao điều lý trí rất hiểu nhưng trái tim chưa cách nào nghe theo…",img: images.image5,author:"Tác giả A",quantityImported:"100",quantityExported:"100"}
const e = {id:"6",name:"Cô Gái Đến Từ Hôm Qua",price:"90000",NXB:"Nhà xuất bản Trẻ",nation:"Việt Nam",category:"Văn Học",ddcCode:"800",description:"Cô gái đến từ hôm qua được ví như một cuốn phim của quá khứ và hiện tại được ngòi bút tài hoa của tác giả dẫn dắt ta đi từ bất ngờ này đến thú vị khác. Nếu ngày xưa còn bé, Thư luôn tự hào mình là cậu con trai thông minh có quyền bắt nạt và sai khiến các cô bé cùng lứa tuổi (nạn nhân cụ thể là bé Tiểu Li) thì giờ đây lớn lên, anh luôn khổ sở khi thấy mình ngu ngơ và bị một cô bạn tên là Việt Án “xỏ mũi”. Và điều nghịch lý ấy xem ra ngày càng “trớ trêu” hơn… Trong lần tái bản này, tác phẩm được ra mắt theo phong cách mới, với phiên bản bìa thứ 14, được in trên chất liệu giấy dầy và nhẹ, kèm bài thơ “Cô gái đến từ hôm qua” của nhà văn Nguyễn Nhật Ánh và 10 hình minh họa của họa sĩ Đỗ Hoàng Tường.",img: images.image6,author:"Tác giả A",quantityImported:"100",quantityExported:"100",}

const h = {id:"8",name:"Totto-Chan Bên Cửa Sổ",price:"200000",NXB:"Nhà xuất bản Văn Học",nation:"Nhật bản",category:"Văn Học",ddcCode:"800",description:"Không còn cách nào khác, mẹ đành đưa Totto-chan đến một ngôi trường mới, trường Tomoe. Đấy là một ngôi trường kỳ lạ, lớp học thì ở trong toa xe điện cũ, học sinh thì được thoả thích thay đổi chỗ ngồi mỗi ngày, muốn học môn nào trước cũng được, chẳng những thế, khi đã học hết bài, các bạn còn được cô giáo cho đi dạo. Đặc biệt hơn ở đó còn có một thầy hiệu trưởng có thể chăm chú lắng nghe Totto-chan kể chuyện suốt bốn tiếng đồng hồ! Chính nhờ ngôi trường đó, một Totto-chan hiếu động, cá biệt đã thu nhận được những điều vô cùng quý giá để lớn lên thành một con người hoàn thiện, mạnh mẽ.",img: images.image8,author:"Tác giả A",quantityImported:"100",quantityExported:"100"}
const k =   {id:"9",name:"Làng Quê Buồn Vui… Thương Nhớ…",price:"200000",NXB:"Nhà xuất bản Tổng Hợp TPHCM",nation:"Việt Nam",category:"Văn Học",ddcCode:"800",description:"Kỹ sư cao cấp phan Khánh vốn là một nhà khoa học thủy lợi yêu thích lịch sử, có nhiều duyên nợ với nghề văn. Dẫu không phải là nhà văn chuyên nghiệp, song ông có một sự nghiệp sáng tác khá đồ sộ với hơn hai mươi tác phẩm. Nhà văn ma Văn Kháng từng nhận xét trong Lời giới thiệu cuốn tiểu thuyết Đỗ Thích kỳ án: “Sáng tác của cây bút phan Khánh có khuynh hướng chuyên sâu về lịch sử. Đặc điểm này phản ánh ưu thế trội trong học vấn, tài năng, tính cách của ông. Thông thạo lịch sử, giàu có về ngôn ngữ, minh triết về tư duy, ưa thích khám phá chiều sâu hiện thực và có một trí nhớ siêu thường đáng được gọi là cường ký”. Ở tuổi 85, ngòi bút của ông vẫn sắc sảo và giàu cảm xúc trong từng trang viết của tiểu thuyết Làng quê thương nhớ mà quí độc giả đang cầm trên tay.",img: images.image9,author:"Tác giả A",quantityImported:"100",quantityExported:"100"}
const m =    {id:"10",name:"Đi Qua Hoa Cúc",price:"120000",NXB:"Nhà xuất bản Trẻ",nation:"Việt Nam",category:"Văn Học",ddcCode:"800",description:"Cuốn Đi Qua Hoa Cúc là tập truyện dài của Nguyễn Nhật Ánh, mở đầu câu truyện tác giả kể lại tuổi ấu thơ hồn nhiên của nhân vật trong truyện, kết hợp với tả cảnh ở miền quê, những ngôi nhà nằm dọc hai bên đường đá sỏi dọc theo hai bên hàng dâm bụt và cả cây sứ cây bàng tỏa bóng mát, tỏa hương thơm trước sân nhà. Một nét vẽ nên thơ thật đầm ấm ở một vùng quê xa xôi tác giả dường như làm ấm lòng cho người đọc. Thật vậy mỗi cốt truyện của Nguyễn Nhật Ánh đã phác họa lên một nét quê hương ngọt ngào, một thời ấu thơ đẹp, một tình yêu của tuổi học trò cũng hòa lẫn tình yêu khát khao của bao lứa tuổi. Cuốn truyện dài Đi Qua Hoa Cúc là một trong những tác phẩm tuyệt tác hay của tác giả làm thôi thúc người đọc thêm nhiều ấn tượng và sự lôi cuốn tràn dâng trong lòng bạn đọc.",img: images.image10,author:"Tác giả A",quantityImported:"100",quantityExported:"100"}
const n =    {id:"11",name:"Có Một Ngày, Bố Mẹ Sẽ Già Đi",price:"150000",NXB:"Nhà xuất bản Thế Giới",nation:"Việt Nam",category:"Hồi Ký",ddcCode:"800",description:"Càng lớn lên, những quyến luyến của chúng ta đối với bố mẹ càng ít. Khi đại bàng non có thể giương cánh, nó luôn hướng tới không trung, chứ không phải rúc vào đôi cánh bố mẹ.  Bạn khát vọng cuộc sống khởi sắc, không còn quẫn bách giật gấu vá vai. Bạn khát vọng sự nghiệp tiến triển, như thế mới không uổng bao năm vất vả tăng ca bất kể gió mưa. Bạn khát vọng con cái của mình về sau có thể lớn lên vui vẻ khỏe mạnh, đạt được thành tích đáng tự hào, vươn lên trong môi trường cạnh tranh quyết liệt… Nhưng bạn lại vô tình đặt một khát vọng khác nằm sâu trong tâm hồn xuống vị trí dưới cùng, khát vọng này chính là hy vọng bố mẹ đừng vội già đi.",img: images.image11,author:"Tác giả A",quantityImported:"100",quantityExported:"100"}
const i =    {id:"12",name:"999 Lá Thư Gửi Cho Chính Mình ",price:"100000",NXB:"Nhà xuất bản Thanh Niên",nation:"Trung Quốc",category:"Hồi Ký",ddcCode:"800",description:"“999 lá thư gửi cho chính mình” của tác giả Miêu Công Tử là một tác phẩm truyền cảm hứng cực kỳ nổi tiếng trên các diễn đàn văn học mạng, các phương tiện thông tin đại chúng và là một trong những tác phẩm luôn nằm trong TOP#1 Những cuốn sách bán chạy nhất kể từ khi ra mắt tại Việt Nam. Tác phẩm mang một màu sắc riêng biệt qua những bức thư ngắn chất chứa lời động viên, nhắn nhủ dành cho độc giả về giá trị cuộc sống, tình yêu, tuổi trẻ, tương lai… v.v..  Bằng những ngôn từ sâu sắc và lắng đọng, tác phẩm đã được rất nhiều độc giả trẻ tại Việt Nam ủng hộ bởi ý nghĩa truyền cảm hứng, tiếp sức giúp mọi người ngày một nỗ lực hơn để có thể vững bước trên con đường thành công và khẳng định bản thân.",img: images.image12,author:"Tác giả A",quantityImported:"100",quantityExported:"100"}
const f = {id:"7",name:"Phía Tây Không Có Gì Lạ",price:"90000",NXB:"Nhà xuất bản Văn Học",nation:"Đức",category:"Văn Học",ddcCode:"800",description:"Phía Tây Không Có Gì Lạ  Thế chiến thứ nhất nổ ra, những chàng trai đang ngồi trên ghế nhà trường bị chuyển thẳng ra mặt trận. Tại đây sự khốc liệt của chiến tranh đã khiến họ tê dại khi bom đạn không chỉ tước đi những phần cơ thể mà còn cả tâm hồn. Thế nên chưa kịp trưởng thành họ đã trở nên già nua, bởi gần với cái chết hơn là sự sống. Họ cũng chẳng còn tin tưởng ai, chẳng thiết tha điều gì, kể cả ngày trở về.  Cho nên khi tất cả đồng đội cùng trang lứa đã ngã xuống, cái chết đối với những chàng trai ấy là sự giải thoát. Họ nằm xuống nhẹ nhangfm thanh than đến độ tưởng như chẳng hề may may lay động đến thứ gì xung quanh, dù chỉ là một ngọn cỏ. Mặt trận hoàn toàn yên tĩnh, bản báo cáo chiến trường chỉ ghi vẻn vẹn một câu: “Ở phía Tây, không có gì lạ.” Phải, chẳng có gì lạ, chỉ có một người vừa rời khỏi cuộc đời khi độ tuổi mới chớm đôi mươi.",img: images.image7,author:"Tác giả A",quantityImported:"100",quantityExported:"100"}
const categoriesData = [
        {
          id: 1,
          categoryName: 'Bán chạy',
          books: [m,n,c,i ],
        },
        {
          id: 2,
          categoryName: 'Mới nhất',
          books: [h,k, f ,d],
        },
        {
          id: 4,
          categoryName: 'Sách giảm giá',
          books: [a, b, c, d, e ,f],
        },
      ];
    const CategoryList = [
        {
            id: 1,
            cateName: 'Văn Học',
            books: [a,b,c,e],
        },
        {
            id: 2,
            cateName: 'Kinh tế',
            books: [h,i,f,b,],
        },
        {
            id: 3,
            cateName: 'Hồi Ký',
            books: [k,e, f,c,d],
        },
        {
            id: 4,
            cateName: 'Thiếu Nhi',
            books: [n, m, d,e,c,f],
        },

    ]
    const RenderSearchBar = () => {
        const [searchQuery, setSearchQuery] = useState('');
    
        const onChangeSearch = query => setSearchQuery(query);
    
        return (
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{marginLeft: 10, marginTop:10,}}>
              <Icon.Button
                name="menu"
                size={40}
                color={COLORS.white}
                backgroundColor= {COLORS.primary}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            </View>
            <Searchbar
            style={{
              height: 40,
              width: 240,
              marginTop: 20,
              marginRight: 20,
              borderRadius:5,
            }}
            placeholder="Search..."
            onChangeText={onChangeSearch}
            value={searchQuery} 
            onTouchStart= {() => {navigation.navigate('Search')}}
            />
            <TouchableOpacity
              style={{marginRight: 20, marginTop: 15}}
              onPress={() => {
                navigation.navigate('ShoppingCart',);
              } }>
              <Icon1 name="shoppingcart" size={35} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        );
      };
      const RenderSlide = () => {
        return (
          <View>
          <Swiper
            autoplay
            autoplayTimeout={6}
            horizontal={false}
            height={200}
            width={'98%'}
            marginLeft ={8}
            marginRight={6}
            activeDotColor= {COLORS.primary}>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://cdn.luatminhkhue.vn/lmk/articles/19/97963/mau-thong-bao-thuc-hien-chuong-trinh-khuyen-mai-moi-nhat-nam-2018-97963.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://newshop.vn/public/uploads/landing-page/thang-3-sach-tre.png',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'http://300b5338.vws.vegacdn.vn/image/img.media/Khuyen%20mai%20hoi%20sach%20Kim%20Dong.jpg'
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://hotro.tripi.vn/wp-content/uploads/2020/12/1400x600.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'http://file.hstatic.net/1000302121/file/7529067440_img_1932_85b6554900494565b887311903595bdf_1024x1024.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'http://300b5338.vws.vegacdn.vn/image/img.media/Khuyen%20mai%20hoi%20sach%20Alpha.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://atpsoftware.vn/wp-content/uploads/2019/04/1-142.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'http://bookish.vn/wp-content/uploads/2019/05/banner_web_quoc-van_925x412-1.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
              </View>
            </Swiper>
          </View>
      );
    };

    const [categories, setCategories] = useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = useState(1);
    
    const RenderCategory=() => {
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity 
                    style={{ flex: 1, marginRight: 30}}
                    onPress={() => setSelectedCategory(item.id)}>
                        {
                            selectedCategory === item.id &&
                            <Text style={{fontSize: 22, color: COLORS.primary, fontWeight:'bold',borderBottomWidth: 2, paddingBottom: 5, borderColor: '#FF8C00'}}>{item.categoryName}</Text>
                        }
                        {
                            selectedCategory !== item.id &&
                            <Text style={{fontSize: 22, color: COLORS.lightGray, }}>{item.categoryName}</Text>
                        }
                    </TouchableOpacity>
            )
        };

        return (
            <View style={{
                flex: 1,
                paddingLeft: 15, 
                paddingTop: 15, 
                backgroundColor: COLORS.white,
                marginTop: 15,
                }}>
                <FlatList
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    />
            </View>
        )

    };
    function renderCategoryData() {
        var books = [];
      
        let selectedCategoryBooks = categories.filter(k => k.id == selectedCategory);
    
        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books;
        }
        
      
          return (
            <View style={{ flex: 1, backgroundColor: COLORS.white }}>
              {/* Header */}
              <View
                style={{
                  paddingHorizontal: SIZES.padding,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
            
              </View>
      
              {/* Books */}
              <View style={{ flex: 1, marginTop: SIZES.padding, marginBottom:25, marginLeft:5 }}>
                <FlatList
                  data={books}
                  renderItem={({item}) => <BookList  navigation = {navigation} book={item}  keyExtractor={item => `${item.id}`} />}
                  keyExtractor={item => `${item.id}`}
                  horizontal
                  showsHorizontalScrollIndicator={false} />
              </View>
            </View>
          )
        };
        const [categorieslist, setCategorieslist] = useState(CategoryList);
        function renderListCategory() {
         
            var book = []
            return (
              <View>
                {categorieslist.map((item, index) => {
                let selectedCategoryBooks = categorieslist.filter(k => k.id === item.id);
                if (selectedCategoryBooks.length > 0) {
                book = selectedCategoryBooks[0].books;}
                return(
                  <View style={{ flex: 1, backgroundColor: COLORS.white, marginTop:15 }}>
              {/* Header */}
              <View style={{marginLeft: 15, marginTop: 10}}>
              <Text style={{fontSize: 22, color: COLORS.black, fontWeight:'bold'}}>{item.cateName}</Text></View>
              <View
                style={{
                  paddingHorizontal: SIZES.padding,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
            
              </View>
                
              {/* Books */}
              <View style={{ flex: 1, marginTop: SIZES.padding, marginBottom:25, marginLeft:5 }}>
                <FlatList
                  data={book}
                  renderItem={({item}) => <BookList  navigation = {navigation} book={item} keyExtractor={item => `${item.id}`} />}
                  keyExtractor={item => `${item.id}`}
                  horizontal
                  showsHorizontalScrollIndicator={false} />
              </View>
              <TouchableOpacity onPress={() => {navigation.navigate('Category',{str:item.cateName})}}>
              <View style={{height: 45, width: 120, backgroundColor: COLORS.primary,
                           borderRadius: 30, marginLeft: '35%', marginBottom: 15}}>
                
                  <Text style={{fontSize: 18, color: COLORS.white,
                     fontWeight: 'bold', marginLeft: 20, marginTop: 8}}> 
                     Xem thêm
                  </Text>
                </View>
              </TouchableOpacity>
              
              
            </View>
                )
                })}
                </View>
                )
              }
      
      return (
        <SafeAreaView style={{flex: 1}}>
        {/* Header Section */}
        <View><StatusBar backgroundColor="#FF8C00" /></View>
        <View style={{height: 70, backgroundColor: COLORS.primary, paddingBottom: 10}}>
  
          {RenderSearchBar()}
        </View>
        
        {/* Body Section */}
        <ScrollView style={{marginTop: 12}}>
            <View>{RenderSlide()}</View>
            <View>{RenderCategory()}</View>
            <View>{renderCategoryData()}</View>
            <View>{renderListCategory()}</View>
        </ScrollView>
      </SafeAreaView>
      )
};

export default Home;

const styles = StyleSheet.create({
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
      },
      sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
      },
});