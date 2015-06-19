<nav role="navigation">
    <div>
      <h2 class="fadein">Photos</h2>
      <ul>
        <?php foreach($pages->visible()->not('about') as $p): ?>
          <?php foreach($p->children()->visible() as $p): ?>
          <li class="fadein fromleft">
            <a href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
          </li>
          <?php endforeach ?>
        <?php endforeach ?>
        <li class="fadein"><a href="<?php echo url('wallpapers') ?>">Wallpapers</a></li>
      </ul>
    </div>
      
    <div>
      <h2 class="fadein">Infos</h2>
      <ul>
        <?php foreach($pages->visible()->not('albums') as $p): ?>
        <li class="fadein fromleft">
          <a href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
        </li>
        <?php endforeach ?>
        <li class="fadein fromleft"><a href="https://www.facebook.com/koonepics/" target="_blank">Facebook</a></li>
        <li class="fadein fromleft"><a href="https://instagram.com/koone/" target="_blank">Instagram</a></li>
      </ul>
    </div>
</nav>
