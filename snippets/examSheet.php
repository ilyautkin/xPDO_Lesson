<?php
if (!$_POST['sheet']) {
    $processor = 'sheet/create';
} else {
    $_POST['id'] = $_POST['sheet'];
    $modx->setPlaceholder('id', $_POST['id']);
    if ($_POST['remove']) {
        $processor = 'sheet/remove';
    } else {
        $processor = 'sheet/update';
    }
}
$processorProps = array('processors_path' => $modx->getOption('core_path') . 'components/exam/processors/');
$response = $modx->runProcessor($processor, $_POST, $processorProps);
if ($response->isError()) {
    $hook->addError('process_error', $response->getMessage());
    return false;
}
return true;
