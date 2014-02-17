<?php
/**
 * Get a list of Items
 */
class modExtraItemGetListProcessor extends modObjectGetListProcessor {

  /* Указываем, что мы хотим работать с другим классом объектов */
	public $objectType = 'ExamSheet';
	public $classKey = 'ExamSheet';
	public $defaultSortField = 'id';
	public $defaultSortDirection = 'DESC';
	public $renderers = '';


	/**
	 * @param xPDOQuery $c
	 *
	 * @return xPDOQuery
	 */
	public function prepareQueryBeforeCount(xPDOQuery $c) {
		return $c;
	}


	/**
	 * @param xPDOObject $object
	 *
	 * @return array
	 */
	public function prepareRow(xPDOObject $object) {
		$array = $object->toArray();

		return $array;
	}

}

return 'modExtraItemGetListProcessor';
