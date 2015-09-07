<?php if(!defined('KIRBY')) exit ?>

title: About
pages: 
	template: about
files: true
fields:
  title:
    label: Title
    type:  text
  textcol1:
    label: text 1st column
    type:  textarea
  textcol2:
    label: text 2nd column
    type:  textarea
  textcol3:
    label: text 3rd column
    type:  textarea
  contactText:
    label: Contact button text
    type:  text
    default: contact me