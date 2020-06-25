import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Image,
} from 'react-native';
import { lightGray, purple } from 'utils/constants/colors';
import { MyHeader } from 'utils/constants/elements';
import { NamePicker } from 'utils/modals/NamePicker'

export default function Home(props) {
  const [photos, setPhotos] = useState([1, 1, 1, 1, 1, 1, 1, 1]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const visibleModall = () => {
    setShowModal(true)
  }
  const dissmissModall = () => {
    setShowModal(false)
  }


  const loadPage = () => { };
  const gotoDetailes = item => {
    props.navigation.navigate('Detailes', { id: item });
  };

  const renderItems = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.ItemContainer}
        onPress={() => gotoDetailes(item)}>
        <Image
          resizeMode={'stretch'}
          source={require('assets/logo.png')}
          style={styles.Image}
        />
      </TouchableOpacity>
    );
  };

  const onSetNewAlbumName = (val) => {
    dissmissModall();
    props.navigation.navigate('UploadPhoto', { name: val })

  }


  return (
    <>
      <MyHeader Title="آلبوم عکس شما" onPlusPress={visibleModall} />
      <StatusBar backgroundColor="#470425" />
      <NamePicker text='لطفا نام آلبوم جدید را وارد نمایید' visible={showModal} confirm={onSetNewAlbumName} dissmiss={dissmissModall} />
      <View style={styles.Container}>
        <FlatList
          style={styles.FlatList}
          data={photos}
          maxToRenderPerBatch={8}
          initialNumToRender={8}
          windowSize={8}
          keyExtractor={i => i.ID}
          renderItem={renderItems}
          onEndReached={() => {
            if (!isLoading) {
              loadPage();
            }
          }}
          onEndReachedThreshold={0.9}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => loadPage(true)}
            />
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: lightGray,
  },
  FlatList: {
    flex: 1,
    width: '100%',
  },
  ItemContainer: {
    width: '90%',
    height: 250,
    margin: 2,
    alignSelf: 'center',
    borderColor: purple,
    borderWidth: 0.5,
  },
  Image: {
    width: '95%',
    height: 240,
    alignSelf: 'center',
  },
});
