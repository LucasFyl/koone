<nav role="navigation">
    <div>
      <h2>Photos</h2>
      <ul>
        <?php foreach($pages->visible()->not('about') as $p): ?>
        <?php foreach($p->children()->visible() as $p): ?>
        <li>
          <a href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
        </li>
        <?php endforeach ?>
        <?php endforeach ?>
      </ul>
    </div>
      
    <div>
      <h2>Infos</h2>
      <ul>
        <?php foreach($pages->visible()->not('albums') as $p): ?>
        <li>
          <a href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
        </li>
        <?php endforeach ?>
        <li><a href="#" target="_blank">Facebook</a></li>
        <li><a href="#" target="_blank">Instagram</a></li>
      </ul>
    </div>
</nav>
