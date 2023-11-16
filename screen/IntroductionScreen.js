import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const IntroductionScreen = ({navigation}) => {
  return (
    <SafeAreaView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Câu chuyện thương hiệu của Tuhu</Text>
      <Text style={styles.paragraph}>
        Từ hành trình đặt những bước chân đến khắp mọi nơi trên thế giới, người sáng lập Tuhu đã
        ấp ủ mong ước rằng có thể mang ẩm thực thế giới vào trong chiếc bánh mì Việt Nam. Lấy ý
        tưởng từ những cửa hàng tiện lợi tại Mỹ, Tuhu đã được tạo dựng thành một hệ thống nhà
        hàng đồ ăn nhanh–tiện lợi, thân thiện, gần gũi và chuyên nghiệp đặc trưng văn hóa người
        Việt.
      </Text>
      <Text style={styles.paragraph}>
        Mong muốn cải thiện thị trường đồ ăn nhanh Việt Nam trở nên văn minh và chuyên nghiệp, Tuhu
        lấy cái tâm và lợi ích của người tiêu dùng làm kim chỉ nam. Tuhu giám sát chặt chẽ khâu
        quản lý chất lượng của mình từ khâu sản xuất đến khâu tiêu dùng để thực khách có thể an tâm
        gửi gắm niềm tin trong từng bữa ăn của mình nơi Tuhu.
      </Text>
      <Text style={styles.paragraph}>
        Không chỉ quan tâm chất lượng sản phẩm, Tuhu còn luôn nghĩ cách làm phong phú bữa ăn của
        người Việt bằng cách đổi mới menu định kỳ sao cho có thể mang ẩm thực thế giới vào trong
        chiếc bánh mì truyền thống Việt Nam mà vẫn hợp với khẩu vị người Việt. Để mang tới những
        món ăn an tâm, chất lượng cùng niềm tâm huyết với ẩm thực, Tuhu đang nỗ lực phát triển và
        hoàn thiện, xứng đáng với kỳ vọng của thực khách trong nước và quốc tế.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    padding: 20,
    fontSize: 16,
    marginBottom: 16,
  },
});

export default IntroductionScreen;
