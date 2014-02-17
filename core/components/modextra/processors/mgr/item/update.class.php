<?php
/* Чтобы не копировать то, что мы уже писали, просто подгрузим наш процессор */
require MODX_CORE_PATH . 'components/exam/processors/sheet/update.class.php';

class modExtraItemUpdateProcessor extends ExamSheetUpdateProcessor {
	public function beforeSet() {
	  /* Добавляем проверки полей, обязательных к заполнению */
		$required = array('student','group','course','subject','examiner');
		foreach ($required as $tmp) {
			if (!$this->getProperty($tmp)) {
				$this->addFieldError($tmp, $this->modx->lexicon('field_required'));
			}
		}

		if ($this->hasErrors()) {
			return false;
		}
		return parent::beforeSet();
	}
}

return 'modExtraItemUpdateProcessor';
