// MyDocument.js
import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    
  },
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  leftColumn: {
    flexDirection: 'column',
    backgroundColor: '#db34bf', 
    padding:5,
    width: 150,  
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  subHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "#f39dab",
  },
  content: {
    fontSize: 14,
    marginBottom: 5,
    maxWidth:400,
  },
  leftColumnTitle:{
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "#f1c4cc",
  },
  leftColumnContent:{
    fontSize: 10,
    marginBottom: 8,
    marginTop:8,
  },
});

const MyDocument = ({ firstName, lastName,Eaddress, phoneN, dateG,degree,Schooldescription,school,aboutMe,skills,projectName,ProjectDescription,projects}) => (
  
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container} >
        <View style={styles.leftColumn}>
        <Text style={styles.leftColumnTitle}>Personal Information</Text>
        <Text style={styles.leftColumnContent}>Phone:{phoneN}</Text>
        <Text style={styles.leftColumnContent}>Email:{Eaddress} </Text>

        <Text style={styles.leftColumnTitle}>Skills</Text>

        <ol> 
  {skills.map((s, index) => (
    <li key={index}>
      <Text style={styles.leftColumnContent}>{s}</Text>
    </li>
  ))}
</ol>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.header}>{firstName} {lastName}</Text>
          <Text style={styles.subHeader}>AboutMe : </Text>
          <Text style={styles.content}>{aboutMe}</Text>
          
          <Text style={styles.subHeader}>Education</Text>
          <Text style={styles.content}>Institution: {school}</Text>
          <Text style={styles.content}>{Schooldescription}</Text>
          <Text style={styles.content}>Degree: {degree}</Text>
          <Text style={styles.content}>Year: {dateG}</Text>

          <Text style={styles.subHeader}>Work Experience</Text>
          {projects.map((p,index) => (
            <p key={index}>
              <Text style={styles.content}>{p.name}</Text>
              <Text style={styles.content}> {p.description}</Text>
            </p>
          ))}
          
        </View>
      </View>
    </Page>
  </Document>
);
export default MyDocument;