import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import db from '../config'
import firebase from 'firebase'

export default class Searchscreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      allTransactions:[]
    }
  }

  componentDidMount=async()=>{
    const query=await db.collection("transaction").get()
    query.docs.map((doc)=>{
      this.setState({
        allTransactions:[...this.state.allTransactions,doc.data()]
      })
    })
  }
    render() {
      return (
        <FlatList 
        data={this.state.allTransactions}
        renderItem={({item})=>(
          <View style={{borderBottomWidth:2}}>
             <Text>{"book id: "+transaction.bookId}</Text>
                <Text>{"student id: "+transaction.studentId}</Text>
                <Text>{"transaction type: "+transaction.transactionType}</Text>
                <Text>{"date: "+transaction.date.toDate()}</Text>
              </View>
          
        )}
        keyExtractor={(item,index)=>index.toString()}/>
      );
    }
  }