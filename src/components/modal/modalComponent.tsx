import { ModalIcon } from '@assets/icons';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import ModalComponentParams from './types';

const ModalComponent: FunctionComponent<ModalComponentParams> = (
  props: ModalComponentParams
) => {
  const { modalVisible, handleModalClose } = props;
  const [countValue, setCountValue] = useState<number>(3);
  const myInterval = useRef<any | null>(null);

  useEffect(() => {
    setCountValue(3);
    if (modalVisible === true) {
      myInterval.current = setInterval(() => {
        setCountValue(countValue => countValue - 1);
      }, 1000);
    }
    return () => clearInterval(myInterval.current);
  }, [modalVisible]);

  useEffect(() => {
    if (countValue === 0) {
      clearInterval(myInterval.current);
      handleModalClose();
    }
  }, [countValue]);

  return (
    <Modal isVisible={modalVisible} onBackdropPress={() => handleModalClose()}>
      <View style={styles.centeredView}>
        <View>
          <ModalIcon />
        </View>

        <Text style={styles.modalTextStyle}>New Employee has been added</Text>

        <Text style={styles.modalTextStyle}>successfully!</Text>
      </View>
    </Modal>
  );
};

export default ModalComponent;
