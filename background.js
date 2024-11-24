// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

chrome.commands.onCommand.addListener(function(command) {
    if (command === "C-W") {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
          const tabId = tabs[0].id;
          chrome.scripting.executeScript({
            target: {tabId: tabId},
            files: ['content_c_w.js']
          });
        });
        return;
    }
    if (command === "C-S") {
        e = new KeyboardEvent("keydown", {'key': 's', 'code':"KeyC", 'keyCode': 67,'ctrlKey': true, 'isTrusted': false})
        term._core._keyDown(e) // 这样才可以，注意一定要设置 KeyCode ，这个是关键，否则没有效果。
        return;
    }
});
