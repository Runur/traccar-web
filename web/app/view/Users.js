/*
 * Copyright 2015 Anton Tananaev (anton@traccar.org)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Traccar.view.Users', {
    extend: 'Ext.grid.Panel',
    xtype: 'usersView',

    requires: [
        'Traccar.view.UsersController',
        'Traccar.view.EditToolbar'
    ],

    controller: 'users',
    store: 'Users',

    selType: 'rowmodel',

    tbar: {
        xtype: 'editToolbar',
        items: [{
            disabled: true,
            handler: 'onGeofencesClick',
            reference: 'userGeofencesButton',
            glyph: 'xf21d@FontAwesome',
            tooltip: Strings.sharedGeofences,
            tooltipType: 'title'
        }, {
            disabled: true,
            handler: 'onDevicesClick',
            reference: 'userDevicesButton',
            glyph: 'xf248@FontAwesome',
            tooltip: Strings.deviceTitle,
            tooltipType: 'title'
        }, {
            disabled: true,
            handler: 'onGroupsClick',
            reference: 'userGroupsButton',
            glyph: 'xf247@FontAwesome',
            tooltip: Strings.settingsGroups,
            tooltipType: 'title'
        }, {
            disabled: true,
            handler: 'onNotificationsClick',
            reference: 'userNotificationsButton',
            glyph: 'xf003@FontAwesome',
            tooltip: Strings.sharedNotifications,
            tooltipType: 'title'
        }]
    },

    listeners: {
        selectionchange: 'onSelectionChange'
    },

    forceFit: true,

    columns: {
        defaults: {
            minWidth: Traccar.Style.columnWidthNormal
        },
        items: [{
            text: Strings.sharedName,
            dataIndex: 'name'
        }, {
            text: Strings.userEmail,
            dataIndex: 'email'
        }, {
            text: Strings.userAdmin,
            dataIndex: 'admin'
        }]
    }
});
