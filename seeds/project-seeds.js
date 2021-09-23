const sequelize = require('../config/connection');
const { Project } = require('../models');

const projectdata = [
 {
  title:'Val Vista Lakes',
  shipping_address:'123 Val Vista ave', 
  shipping_city:'Gilbert', 
  shipping_state:'AZ', 
  shipping_zip:'85251', 
  customer_id:'1', 
  process_id:'1'
 },
 {
  title:'Autumn Creek',
  shipping_address:'234 McQueen rd', 
  shipping_city:'Chandler', 
  shipping_state:'AZ', 
  shipping_zip:'85295', 
  customer_id:'2', 
  process_id:'2'
 }, 
 {
  title:'Silverado',
  shipping_address:'345 Patrick st', 
  shipping_city:'Gilbert', 
  shipping_state:'AZ', 
  shipping_zip:'85215', 
  customer_id:'3', 
  process_id:'2'
 }, 
 {
  title:'Higley Center',
  shipping_address:'456 Greenfield rd', 
  shipping_city:'Gilbert', 
  shipping_state:'AZ', 
  shipping_zip:'85231', 
  customer_id:'4', 
  process_id:'3'
 }, 
 {
  title:'Mesa Community Center',
  shipping_address:'567 Columbus ave', 
  shipping_city:'Mesa', 
  shipping_state:'AZ', 
  shipping_zip:'85345', 
  customer_id:'5', 
  process_id:'4'
 }, 
 {
  title:'Tempe Arts Building',
  shipping_address:'678 Main st', 
  shipping_city:'Tempe', 
  shipping_state:'AZ', 
  shipping_zip:'85132', 
  customer_id:'2', 
  process_id:'5'
 }  
];

const seedProjects = () => Project.bulkCreate(projectdata, {individualHooks: true});

module.exports = seedProjects;
