<?php
if ($_GET['sheet'] && $sheet = $modx->getObject('ExamSheet', $_GET['sheet'])) {
    $modx->setPlaceholders($sheet->toArray());
}
