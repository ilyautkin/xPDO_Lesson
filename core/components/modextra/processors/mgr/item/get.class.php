<?php
/**
 * Get an Item
 */
class modExtraItemGetProcessor extends modObjectGetProcessor {
  /* Указываем, что мы хотим работать с другим классом объектов */
	public $objectType = 'ExamSheet';
	public $classKey = 'ExamSheet';
	public $languageTopics = array('modextra:default');
}

return 'modExtraItemGetProcessor';
