<?php
class ExamSheetCreateProcessor extends modObjectCreateProcessor {

    public $classKey = 'ExamSheet';
    public $objectType = 'object';
    
    public function beforeSet() {
        if (!$this->modx->user->id) return 'Вам нужно авторизоваться';
        $this->setProperty('created_by', $this->modx->user->id);
        return true;
    }

}

return 'ExamSheetCreateProcessor';
