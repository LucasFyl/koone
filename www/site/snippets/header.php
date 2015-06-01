<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
  <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic|Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
  <?php echo css('assets/css/style.css') ?>

</head>
<body>

  <div id="loader">
    <div id="wrap">
      <div class="loading outer">
        <div class="loading inner"></div>
      </div>
    </div>
  </div>

  
  <header>

    <div class="container">

      <h1 class="logo col-xs-2">
        <a href="<?php echo url() ?>">
          Kooné
          <!--<img src="<?php echo url('assets/images/logo.svg') ?>" alt="<?php echo $site->title()->html() ?>" />-->
        </a>  
      </h1>

      <a href="#" class="menu-trigger pull-right sidebarTrigger col-xs-1"><span class="glyphicon glyphicon-menu-hamburger"></span></a>

    </div>
    
  </header>
