modExtra.grid.Items = function(config) {
	config = config || {};
	Ext.applyIf(config,{
		id: 'modextra-grid-items'
		,url: modExtra.config.connector_url
		,baseParams: {
			action: 'mgr/item/getlist'
		}
		
		/* Перечисляем поля наших объектов */
		,fields: ['id','student','group','course','subject','examiner','date','score','created_by','add1','add2']
		,autoHeight: true
		,paging: true
		,remoteSort: true
		
		/* Указываем, какие поля отображать в таблице и какая у них ширина */
		,columns: [
			{header: '№',sortable: true,dataIndex: 'id',width: 50}
			,{header: 'Студент',sortable: true,dataIndex: 'student',width: 150}
			,{header: 'Группа',sortable: true,dataIndex: 'group',width: 50}
			,{header: 'Курс',sortable: true,dataIndex: 'course',width: 50}
			,{header: 'Предмет',sortable: true,dataIndex: 'subject',width: 150}
			,{header: 'Преподаватель',sortable: true,dataIndex: 'examiner',width: 150}
			,{header: 'Дата',sortable: true,dataIndex: 'date',width: 70}
			,{header: 'Оценка',sortable: true,dataIndex: 'score',width: 50}
		]
		,tbar: [{
			text: _('modextra_item_create')
			,handler: this.createItem
			,scope: this
		}]
		,listeners: {
			rowDblClick: function(grid, rowIndex, e) {
				var row = grid.store.getAt(rowIndex);
				this.updateItem(grid, e, row);
			}
		}
	});
	modExtra.grid.Items.superclass.constructor.call(this,config);
};
Ext.extend(modExtra.grid.Items,MODx.grid.Grid,{
	windows: {}

	,getMenu: function() {
		var m = [];
		m.push({
			text: _('modextra_item_update')
			,handler: this.updateItem
		});
		m.push('-');
		m.push({
			text: _('modextra_item_remove')
			,handler: this.removeItem
		});
		this.addContextMenuItem(m);
	}
	
	,createItem: function(btn,e) {
		if (!this.windows.createItem) {
			this.windows.createItem = MODx.load({
				xtype: 'modextra-window-item-create'
				,listeners: {
					'success': {fn:function() { this.refresh(); },scope:this}
				}
			});
		}
		this.windows.createItem.fp.getForm().reset();
		this.windows.createItem.show(e.target);
	}

	,updateItem: function(btn,e,row) {
		if (typeof(row) != 'undefined') {this.menu.record = row.data;}
		var id = this.menu.record.id;

		MODx.Ajax.request({
			url: modExtra.config.connector_url
			,params: {
				action: 'mgr/item/get'
				,id: id
			}
			,listeners: {
				success: {fn:function(r) {
					if (!this.windows.updateItem) {
						this.windows.updateItem = MODx.load({
							xtype: 'modextra-window-item-update'
							,record: r
							,listeners: {
								'success': {fn:function() { this.refresh(); },scope:this}
							}
						});
					}
					this.windows.updateItem.fp.getForm().reset();
					this.windows.updateItem.fp.getForm().setValues(r.object);
					this.windows.updateItem.show(e.target);
				},scope:this}
			}
		});
	}

	,removeItem: function(btn,e) {
		if (!this.menu.record) return false;
		
		MODx.msg.confirm({
			title: _('modextra_item_remove')
			,text: _('modextra_item_remove_confirm')
			,url: this.config.url
			,params: {
				action: 'mgr/item/remove'
				,id: this.menu.record.id
			}
			,listeners: {
				'success': {fn:function(r) { this.refresh(); },scope:this}
			}
		});
	}
});
Ext.reg('modextra-grid-items',modExtra.grid.Items);




modExtra.window.CreateItem = function(config) {
	config = config || {};
	this.ident = config.ident || 'mecitem'+Ext.id();
	Ext.applyIf(config,{
		title: _('modextra_item_create')
		,id: this.ident
		,height: 550
		,width: 475
		,url: modExtra.config.connector_url
		,action: 'mgr/item/create'
		
		/* Какие поля будут доступны в окне добавления объекта и как они выглядят */
		,fields: [
		    {xtype: 'textfield',fieldLabel: 'Студент',name: 'student',id: 'modextra-'+this.ident+'-student',anchor: '99%'}
			,{xtype: 'textfield',fieldLabel: 'Группа',name: 'group',id: 'modextra-'+this.ident+'-group',anchor: '30%'}
			,{xtype: 'textfield',fieldLabel: 'Курс',name: 'course',id: 'modextra-'+this.ident+'-course',anchor: '30%'}
			,{xtype: 'textfield',fieldLabel: 'Предмет',name: 'subject',id: 'modextra-'+this.ident+'-subject',anchor: '99%'}
			,{xtype: 'textfield',fieldLabel: 'Преподаватель',name: 'examiner',id: 'modextra-'+this.ident+'-examiner',anchor: '99%'}
			,{xtype: 'textfield',fieldLabel: 'Оценка',name: 'score',id: 'modextra-'+this.ident+'-score',anchor: '30%'}
		]
		,keys: [{key: Ext.EventObject.ENTER,shift: true,fn: function() {this.submit() },scope: this}]
	});
	modExtra.window.CreateItem.superclass.constructor.call(this,config);
};
Ext.extend(modExtra.window.CreateItem,MODx.Window);
Ext.reg('modextra-window-item-create',modExtra.window.CreateItem);


modExtra.window.UpdateItem = function(config) {
	config = config || {};
	this.ident = config.ident || 'meuitem'+Ext.id();
	Ext.applyIf(config,{
		title: _('modextra_item_update')
		,id: this.ident
		,height: 550
		,width: 475
		,url: modExtra.config.connector_url
		,action: 'mgr/item/update'
		
		/* Какие поля будут доступны в окне редактирования объекта и как они выглядят */
		,fields: [
			{xtype: 'hidden',name: 'id',id: 'modextra-'+this.ident+'-id'}
		    ,{xtype: 'textfield',fieldLabel: 'Студент',name: 'student',width: '97%'}
			,{xtype: 'textfield',fieldLabel: 'Группа',name: 'group',width: '30%'}
			,{xtype: 'textfield',fieldLabel: 'Курс',name: 'course',width: '30%'}
			,{xtype: 'textfield',fieldLabel: 'Предмет',name: 'subject',width: '97%'}
			,{xtype: 'textfield',fieldLabel: 'Преподаватель',name: 'examiner',width: '97%'}
			,{xtype: 'textfield',fieldLabel: 'Оценка',name: 'score',width: '30%'}
		]
		,keys: [{key: Ext.EventObject.ENTER,shift: true,fn: function() {this.submit() },scope: this}]
	});
	modExtra.window.UpdateItem.superclass.constructor.call(this,config);
};
Ext.extend(modExtra.window.UpdateItem,MODx.Window);
Ext.reg('modextra-window-item-update',modExtra.window.UpdateItem);
