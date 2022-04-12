import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ResultIMC from '../ResultIMC'

import styles from './style'


export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageIMC, setMessageIMC] = useState('Preencha o peso e a altura')
  const [IMC, setIMC] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')

  function imcCalculator() {
    const imcResult = weight/(height*height)
    setIMC(imcResult.toFixed(2))
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageIMC('Seu IMC é igual:')
      setTextButton('Calcular Novamente')
    } else {
      setIMC(null)
      setTextButton('Calcular')
    }

  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={setHeight}
          value={height}
          placeholder='Ex: 1.75'
          keyboardType='numeric' />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={setWeight}
          value={weight}
          placeholder='Ex: 75.36'
          keyboardType='numeric' />
        <TouchableOpacity
          style={styles.formButtonCalculator}
          onPress={() => validationImc()}>
            <Text style={styles.formTextButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC} />
      </View>
      <View></View>
    </View>
  )
}