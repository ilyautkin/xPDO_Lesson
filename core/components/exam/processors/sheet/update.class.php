<?php
class ExamSheetUpdateProcessor extends modObjectUpdateProcessor {

    public $classKey = 'ExamSheet';
    public $objectType = 'object';
    
    public function beforeSet() {
        if (!$this->modx->user->id) return 'Вам нужно авторизоваться';
        if ($this->object->get('created_by') != $this->modx->user->id)
            return 'Вы не можете редактировать чужие записи';
        return true;
    }

}

return 'ExamSheetUpdateProcessor';
