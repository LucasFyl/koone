<?php if(!defined('KIRBY')) exit ?>

title: Album
pages: false
files:
  sortable: true
fields:
  title:
    label: Title
    type:  text
  date:
    label: date
    type:  date
    default: today
  text:
    label: Text
    type:  textarea
  tags:
    label: Tags
    type:  tags