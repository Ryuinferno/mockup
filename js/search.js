function oSearchSuggest(searchFuc) {
    var input = $('input#search');
    var suggestWrap = $('.search-results');
    var key = "";
    var init = function() {
        input.bind('keyup', sendKeyWord);
        input.bind('blur', function() {
            setTimeout(hideSuggest, 100);
        });
        input.bind('keydown', function(event) {
            if (event.keyCode == 13) {
                location.href = '/mockup/?device=' + input.val()
            }
        });
    }
    var hideSuggest = function() {
        suggestWrap.hide();
    }
    var sendKeyWord = function(event) {
        if (suggestWrap.css('display') == 'block' && event.keyCode == 38 || event.keyCode == 40) {
            var current = suggestWrap.find('a.hover');
            if (event.keyCode == 38) {
                if (current.length > 0) {
                    var prev = current.removeClass('hover').prev();
                    if (prev.length > 0) {
                        prev.addClass('hover');
                        var devicename = prev.html().split("-");
                        input.val(devicename[devicename.length - 1].replace(/\s/g, ""));
                    }
                } else {
                    var last = suggestWrap.find('a:last');
                    last.addClass('hover');
                    var devicename = last.html().split("-");
                    input.val(devicename[devicename.length - 1].replace(/\s/g, ""));
                }
            } else if (event.keyCode == 40) {
                if (current.length > 0) {
                    var next = current.removeClass('hover').next();
                    if (next.length > 0) {
                        next.addClass('hover');
                        var devicename = next.html().split("-");
                        input.val(devicename[devicename.length - 1].replace(/\s/g, ""));
                    }
                } else {
                    var first = suggestWrap.find('a:first');
                    first.addClass('hover');
                    var devicename = first.html().split("-");
                    input.val(devicename[devicename.length - 1].replace(/\s/g, ""));
                }
            }
        } else {
            var valText = $.trim(input.val());
            if (valText == '' || valText == key) {
                return;
            }
            searchFuc(valText);
            key = valText;
        }
    }
    this.dataDisplay = function(data) {
        if (data.length <= 0) {
            suggestWrap.hide();
            return;
        }
        suggestWrap.empty();
        for (var i = 0; i < data.length; i++) {
            suggestWrap.append('<a>' + data[i] + '</a>');
        }
        suggestWrap.show();
        suggestWrap.find('a').hover(function() {
            suggestWrap.find('a').removeClass('hover');
            $(this).addClass('hover');
        }, function() {
            $(this).removeClass('hover');
        }).bind('click', function() {
            var devicename = this.innerHTML.split("-");
            location.href = '/mockup/?device=' + devicename[devicename.length - 1].replace(/\s/g, "");
            suggestWrap.hide();
        });
    }
    init();
};
var searchSuggest = new oSearchSuggest(sendKeyWordToBack);

function sendKeyWordToBack(keyword) {
    var aData = [];
    if ('a5dwg'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC Desire 816'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC Desire 816 - a5dwg');
    }
    if ('a6000'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Lenovo K30-T'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Lenovo K30-T - a6000');
    }
    if ('a6020'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Lenovo Vibe K5/K5 Plus'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Lenovo Vibe K5/K5 Plus - a6020');
    }
    if ('addison'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto Z Play'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto Z Play - addison');
    }
    if ('amami'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z1 Compact'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z1 Compact - amami');
    }
    if ('angler'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Nexus 6P'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Nexus 6P - angler');
    }
    if ('armani'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi RedMi 1s (C/W)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi RedMi 1s (C/W) - armani');
    }
    if ('athene'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto G4/G4 Plus'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto G4/G4 Plus - athene');
    }
    if ('axon7'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'ZTE Axon 7'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('ZTE Axon 7 - axon7');
    }
    if ('bacon'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'OnePlus 1'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('OnePlus 1 - bacon');
    }
    if ('bullhead'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Nexus 5X'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Nexus 5X - bullhead');
    }
    if ('cancro'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Mi-3w/Mi-4'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Mi-3w/Mi-4 - cancro');
    }
    if ('capricorn'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Mi-5s'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Mi-5s - capricorn');
    }
    if ('castor'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z2 Tablet LTE'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z2 Tablet LTE - castor');
    }
    if ('castor_windy'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z2 Tablet WiFi'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z2 Tablet WiFi - castor_windy');
    }
    if ('clark'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto X Style'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto X Style - clark');
    }
    if ('condor'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto E'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto E - condor');
    }
    if ('crackling'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Wileyfox Swift'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Wileyfox Swift - crackling');
    }
    if ('che10'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Huawei Honor 4X (China Telecom)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Huawei Honor 4X (China Telecom) - che10');
    }
    if ('cherry'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Huawei Honor 4/4X'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Huawei Honor 4/4X - cherry');
    }
    if ('chm_cl00'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Huawei Honor 4C/P8 Lite (ChinaTelecom)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Huawei Honor 4C/P8 Lite (ChinaTelecom) - chm_cl00');
    }
    if ('cp8675'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'CoolPad Dazen F2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('CoolPad Dazen F2 - cp8675');
    }
    if ('d2att'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S III (AT&T)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S III (AT&T) - d2att');
    }
    if ('d2spr'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S III (Sprint)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S III (Sprint) - d2spr');
    }
    if ('d2tmo'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S III (T-Mobile)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S III (T-Mobile) - d2tmo');
    }
    if ('d2vzw'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S III (Verizon)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S III (Verizon) - d2vzw');
    }
    if ('d800'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G2 (AT&T)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G2 (AT&T) - d800');
    }
    if ('d801'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G2 (T-Mobile)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G2 (T-Mobile) - d801');
    }
    if ('d802'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G2 (Intl)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G2 (Intl) - d802');
    }
    if ('d803'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G2 (Canada)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G2 (Canada) - d803');
    }
    if ('d850'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G3 (AT&T)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G3 (AT&T) - d850');
    }
    if ('d851'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G3 (T-Mobile)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G3 (T-Mobile) - d851');
    }
    if ('d852'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G3 (Canada)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G3 (Canada) - d852');
    }
    if ('d855'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G3 (Intl)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G3 (Intl) - d855');
    }
    if ('d857'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G3 Dual SIM (D856/7/8/8hk/9)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G3 Dual SIM (D856/7/8/8hk/9) - d857');
    }
    if ('deb'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Nexus 7 2013 (LTE)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Nexus 7 2013 (LTE) - deb');
    }
    if ('dior'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Redmi Note 4g'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Redmi Note 4g - dior');
    }
    if ('dlx'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC Droid DNA'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC Droid DNA - dlx');
    }
    if ('dogo'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia ZR'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia ZR - dogo');
    }
    if ('e975'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG Optimus G (Intl)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG Optimus G (Intl) - e975');
    }
    if ('e980'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG Optimus G Pro (All e98x GSM)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG Optimus G Pro (All e98x GSM) - e980');
    }
    if ('ether'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Nextbit Robin'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Nextbit Robin - ether');
    }
    if ('evita'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One XL'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One XL - evita');
    }
    if ('f320'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G2 (Korea)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G2 (Korea) - f320');
    }
    if ('f400'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G3 (Korea)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G3 (Korea) - f400');
    }
    if ('f460'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G3 Cat.6(Korea)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G3 Cat.6(Korea) - f460');
    }
    if ('falcon'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto G (Unified)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto G (Unified) - falcon');
    }
    if ('ferrari'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Mi-4i'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Mi-4i - ferrari');
    }
    if ('find5'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Oppo Find 5'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Oppo Find 5 - find5');
    }
    if ('find7'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Oppo Find 7 (A/S)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Oppo Find 7 (A/S) - find7');
    }
    if ('find7s'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Oppo Find 7 (S)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Oppo Find 7 (S) - find7s');
    }
    if ('flo'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Nexus 7 2013 (Wi-Fi)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Nexus 7 2013 (Wi-Fi) - flo');
    }
    if ('flounder'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Nexus 9 (Wi-Fi)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Nexus 9 (Wi-Fi) - flounder');
    }
    if ('flounder_lte'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Nexus 9 (LTE)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Nexus 9 (LTE) - flounder_lte');
    }
    if ('g2m'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G2 Mini'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G2 Mini - g2m');
    }
    if ('g620_a2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Huawei G620-A2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Huawei G620-A2 - g620_a2');
    }
    if ('g750c'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Huawei B199'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Huawei B199 - g750c');
    }
    if ('g760l'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Huawei C199'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Huawei C199 - g760l');
    }
    if ('gemini'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Mi-5'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Mi-5 - gemini');
    }
    if ('ghost'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto X (Unified)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto X (Unified) - ghost');
    }
    if ('griffin'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto Z 2016 (Unified)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto Z 2016 (Unified) - griffin');
    }
    if ('grouper'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Nexus 7 (Wi-Fi)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Nexus 7 (Wi-Fi) - grouper');
    }
    if ('h811'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G4 (T-Mobile)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G4 (T-Mobile) - h811');
    }
    if ('h815'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G4 (Intl)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G4 (Intl) - h815');
    }
    if ('h830'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G5 (T-Mobile)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G5 (T-Mobile) - h830');
    }
    if ('h850'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G5 (Intl)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G5 (Intl) - h850');
    }
    if ('ha3g'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy Note 3 (SM-N900)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy Note 3 (SM-N900) - ha3g');
    }
    if ('ham'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Zuk Z1'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Zuk Z1 - ham');
    }
    if ('hammerhead'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Nexus 5'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Nexus 5 - hammerhead');
    }
    if ('hammerheadcaf'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Nexus 5 CAF'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Nexus 5 CAF - hammerheadcaf');
    }
    if ('harpia'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto G4 Play'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto G4 Play - harpia');
    }
    if ('hayabusa'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia TX'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia TX - hayabusa');
    }
    if ('herolte'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S7 Flat'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S7 Flat - herolte');
    }
    if ('hero2lte'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S7 Edge'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S7 Edge - hero2lte');
    }
    if ('hiaeuhl'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One A9 (GSM Intl)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One A9 (GSM Intl) - hiaeuhl');
    }
    if ('hiaeul'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One A9 (GSM US)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One A9 (GSM US) - hiaeul');
    }
    if ('himaul'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One M9 (GSM)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One M9 (GSM) - himaul');
    }
    if ('hlte'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy Note 3'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy Note 3 - hlte');
    }
    if ('hltespr'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy Note 3 (Sprint)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy Note 3 (Sprint) - hltespr');
    }
    if ('hltetmo'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy Note 3 (T-Mobile)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy Note 3 (T-Mobile) - hltetmo');
    }
    if ('honami'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z1'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z1 - honami');
    }
    if ('huashan'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia SP'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia SP - huashan');
    }
    if ('hydrogen'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Mi Max'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Mi Max - hydrogen');
    }
    if ('i605'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy Note II (Verizon)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy Note II (Verizon) - i605');
    }
    if ('i925'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy Note 10.1 (Verizon)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy Note 10.1 (Verizon) - i925');
    }
    if ('i9100'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S II (Intl)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S II (Intl) - i9100');
    }
    if ('i9100g'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S II (G)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S II (G) - i9100g');
    }
    if ('i9300'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S III (Intl)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S III (Intl) - i9300');
    }
    if ('i9305'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S III (GSM LTE)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S III (GSM LTE) - i9305');
    }
    if ('i9500'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S4 (non-LTE)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S4 (non-LTE) - i9500');
    }
    if ('ido'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Redmi 3/Prime'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Redmi 3/Prime - ido');
    }
    if ('j5ltexx'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy J5 (J500F/M/G)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy J5 (J500F/M/G) - j5ltexx');
    }
    if ('j5nltexx'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy J5 (J500FN)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy J5 (J500FN) - j5nltexx');
    }
    if ('jag3gds'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G3 S'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G3 S - jag3gds');
    }
    if ('jagnm'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G3 Beat'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G3 Beat - jagnm');
    }
    if ('jalebi'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'YU Yunique'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('YU Yunique - jalebi');
    }
    if ('jflteatt'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S4 (AT&T)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S4 (AT&T) - jflteatt');
    }
    if ('jfltespr'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S4 (Sprint)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S4 (Sprint) - jfltespr');
    }
    if ('jfltetmo'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S4 (T-Mobile)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S4 (T-Mobile) - jfltetmo');
    }
    if ('jfltevzw'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S4 (Verizon)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S4 (Verizon) - jfltevzw');
    }
    if ('jfltexx'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S4 (Intl)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S4 (Intl) - jfltexx');
    }
    if ('jsglte'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S4 (China Mobile 4gLTE,GT-I9508V)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S4 (China Mobile 4gLTE,GT-I9508V) - jsglte');
    }
    if ('jordanplus'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Defy / Defy Plus'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Defy / Defy Plus - jordanplus');
    }
    if ('k3gduosctc'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 (China Telecom 3G,SM-G9009D)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 (China Telecom 3G,SM-G9009D) - k3gduosctc');
    }
    if ('k3gxx'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 (Exynos Varient,SM-G900H)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 (Exynos Varient,SM-G900H) - k3gxx');
    }
    if ('kccat6'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 Plus'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 Plus - kccat6');
    }
    if ('kingdom'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Lenovo Vibe Z2 Pro'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Lenovo Vibe Z2 Pro - kingdom');
    }
    if ('kiwi'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Huawei Honor 5X'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Huawei Honor 5X - kiwi');
    }
    if ('klte'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 (Intl,SM-G900F/M/T/S/L/K)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 (Intl,SM-G900F/M/T/S/L/K) - klte');
    }
    if ('kltechn'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 (SM-G9006V,G9008V)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 (SM-G9006V,G9008V) - kltechn');
    }
    if ('kltechnduo'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 (SM-G9006W,G9008W,G9009W)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 (SM-G9006W,G9008W,G9009W) - kltechnduo');
    }
    if ('klteduos'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 (SM-G900FD Dual SIM)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 (SM-G900FD Dual SIM) - klteduos');
    }
    if ('kltedv'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 (Vodafone,SM-G900I)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 (Vodafone,SM-G900I) - kltedv');
    }
    if ('kltekdi'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 au (Japan SCL23,SC04F)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 au (Japan SCL23,SC04F) - kltekdi');
    }
    if ('kltekor'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 (Korea)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 (Korea) - kltekor');
    }
    if ('kltespr'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 (Sprint G900P)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 (Sprint G900P) - kltespr');
    }
    if ('klteusc'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 (US Cellular,SM-G900R4/6/7)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 (US Cellular,SM-G900R4/6/7) - klteusc');
    }
    if ('kltevzw'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 (Verizon,SM-G900V)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 (Verizon,SM-G900V) - kltevzw');
    }
    if ('ks01lte'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S4 LTE-A'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S4 LTE-A - ks01lte');
    }
    if ('l01f'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G2 (Japan)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G2 (Japan) - l01f');
    }
    if ('l55t'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z3 (TD-LTE)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z3 (TD-LTE) - l55t');
    }
    if ('l900'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy Note II (Sprint)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy Note II (Sprint) - l900');
    }
    if ('le_x2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LeEco Max 2 (Le X820)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LeEco Max 2 (Le X820) - le_x2');
    }
    if ('lentislte'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S5 LTE-A'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S5 LTE-A - lentislte');
    }
    if ('leo'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Note Pro'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Note Pro - leo');
    }
    if ('lettuce'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'YU Yuphoria (YU5010)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('YU Yuphoria (YU5010) - lettuce');
    }
    if ('libra'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Mi-4c'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Mi-4c - libra');
    }
    if ('lithium'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Mi Mix'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Mi Mix - lithium');
    }
    if ('ls980'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G2 (Sprint)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G2 (Sprint) - ls980');
    }
    if ('ls990'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G3 (Sprint)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G3 (Sprint) - ls990');
    }
    if ('lux'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto X Play'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto X Play - lux');
    }
    if ('m7'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One (GSM)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One (GSM) - m7');
    }
    if ('m7vzw'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One (Verizon)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One (Verizon) - m7vzw');
    }
    if ('m8'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One 2014'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One 2014 - m8');
    }
    if ('m8d'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One 2014 Dual SIM'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One 2014 Dual SIM - m8d');
    }
    if ('mako'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Nexus 4'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Nexus 4 - mako');
    }
    if ('markw'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Redmi 4 Prime'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Redmi 4 Prime - markw');
    }
    if ('marlin'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Pixel XL'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Pixel XL - marlin');
    }
    if ('maserati'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Droid 4'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Droid 4 - maserati');
    }
    if ('mb886'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Atrix HD'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Atrix HD - mb886');
    }
    if ('mecdug'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One E8 (M8Sw/M8Sd)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One E8 (M8Sw/M8Sd) - mecdug');
    }
    if ('merlin'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto G3 Turbo'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto G3 Turbo - merlin');
    }
    if ('mido'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Redmi Note 4 & 4x'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Redmi Note 4 & 4x - mido');
    }
    if ('mint'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia T'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia T - mint');
    }
    if ('mt2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Huawei Ascend Mate 2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Huawei Ascend Mate 2 - mt2');
    }
    if ('n1'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Oppo N1'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Oppo N1 - n1');
    }
    if ('n3'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Oppo N3'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Oppo N3 - n3');
    }
    if ('n7100'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy Note II (GSM Non-LTE)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy Note II (GSM Non-LTE) - n7100');
    }
    if ('natrium'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Mi-5s Plus'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Mi-5s Plus - natrium');
    }
    if ('nicki'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia M'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia M - nicki');
    }
    if ('nx40x'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Nubia Z5 Mini'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Nubia Z5 Mini - nx40x');
    }
    if ('nx403a'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Nubia Z5S Mini'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Nubia Z5S Mini - nx403a');
    }
    if ('nx503a'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Nubia Z5S'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Nubia Z5S - nx503a');
    }
    if ('nx505j'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Nubia Z7 Max'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Nubia Z7 Max - nx505j');
    }
    if ('nx507j'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Nubia Z7 Mini'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Nubia Z7 Mini - nx507j');
    }
    if ('nx510j'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Nubia Z9 Max'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Nubia Z9 Max - nx510j');
    }
    if ('nx511j'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Nubia Z9 Mini/Z9 Mini Elite(Marshmallow Only)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Nubia Z9 Mini/Z9 Mini Elite(Marshmallow Only) - nx511j');
    }
    if ('nx523j'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Nubia Z11 Max (NX523J_V1)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Nubia Z11 Max (NX523J_V1) - nx523j');
    }
    if ('nx529j'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Nubia Z11 Mini'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Nubia Z11 Mini - nx529j');
    }
    if ('nx549j'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Nubia Z11 MiniS'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Nubia Z11 MiniS - nx549j');
    }
    if ('nx531j'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Nubia Z11'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Nubia Z11 - nx531j');
    }
    if ('obake'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Droid Mini/Ultra/MAXX'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Droid Mini/Ultra/MAXX - obake');
    }
    if ('odin'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia ZL'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia ZL - odin');
    }
    if ('onyx'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'OnePlus X'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('OnePlus X - onyx');
    }
    if ('oneplus3'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'OnePlus 3/3T (3T unsupported unofficial and 6.0)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('OnePlus 3/3T (3T unsupported unofficial and 6.0) - oneplus3');
    }
    if ('osprey'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto G (2015)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto G (2015) - osprey');
    }
    if ('otus'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto E (2015)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto E (2015) - otus');
    }
    if ('peach'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'ARK Benefit A3'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('ARK Benefit A3 - peach');
    }
    if ('peregrine'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto G LTE (Unified)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto G LTE (Unified) - peregrine');
    }
    if ('pme'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC 10'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC 10 - pme');
    }
    if ('quark'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto MAXX'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto MAXX - quark');
    }
    if ('r5'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Oppo R5/R5s (Intl)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Oppo R5/R5s (Intl) - r5');
    }
    if ('r7plus'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Oppo R7 Plus'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Oppo R7 Plus - r7plus');
    }
    if ('rk3288'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Firefly RK3288'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Firefly RK3288 - rk3288');
    }
    if ('s2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LeEco Le 2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LeEco Le 2 - s2');
    }
    if ('sailfish'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Pixel'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Pixel - sailfish');
    }
    if ('sambar'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'YU Yutopia'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('YU Yutopia - sambar');
    }
    if ('satsuki'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z5 Premium Dual'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z5 Premium Dual - satsuki');
    }
    if ('seed'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Android One 2nd gen'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Android One 2nd gen - seed');
    }
    if ('serrano3gxx'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S4 Mini (3G)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S4 Mini (3G) - serrano3gxx');
    }
    if ('serranoltexx'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy S4 Mini (Intl)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy S4 Mini (Intl) - serranoltexx');
    }
    if ('shamrock'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Android One 3rd gen'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Android One 3rd gen - shamrock');
    }
    if ('shamu'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Nexus 6'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Nexus 6 - shamu');
    }
    if ('sirius'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z2 - sirius');
    }
    if ('sprout4'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Android One (4GB)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Android One (4GB) - sprout4');
    }
    if ('sprout8'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Android One (8GB)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Android One (8GB) - sprout8');
    }
    if ('spyder'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Droid Razr/Razr MAXX (CDMA)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Droid Razr/Razr MAXX (CDMA) - spyder');
    }
    if ('sumire'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z5 Dual'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z5 Dual - sumire');
    }
    if ('superior'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy Premier (WCDMA)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy Premier (WCDMA) - superior');
    }
    if ('superiorcmcc'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy Premier (TD-SCDMA)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy Premier (TD-SCDMA) - superiorcmcc');
    }
    if ('surnia'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto E LTE (2015)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto E LTE (2015) - surnia');
    }
    if ('t0lte'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Samsung Galaxy Note II (GSM LTE)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Samsung Galaxy Note II (GSM LTE) - t0lte');
    }
    if ('t6'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One Max (GSM)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One Max (GSM) - t6');
    }
    if ('t6spr'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One Max (Sprint)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One Max (Sprint) - t6spr');
    }
    if ('t6vzw'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One Max (Verizon)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One Max (Verizon) - t6vzw');
    }
    if ('taoshan'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia L'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia L - taoshan');
    }
    if ('targa'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Droid Bionic'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Droid Bionic - targa');
    }
    if ('thea'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto G 2014 LTE (Unified)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto G 2014 LTE (Unified) - thea');
    }
    if ('tilapia'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Google Nexus 7 (GSM)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Google Nexus 7 (GSM) - tilapia');
    }
    if ('titan'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto G 2014 (Unified)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto G 2014 (Unified) - titan');
    }
    if ('tocino'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'OnePlus 2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('OnePlus 2 - tocino');
    }
    if ('togari'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z Ultra'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z Ultra - togari');
    }
    if ('togari_gpe'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z Ultra (GPE)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z Ultra (GPE) - togari_gpe');
    }
    if ('tomato'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'YU Yureka (AO5510)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('YU Yureka (AO5510) - tomato');
    }
    if ('tsubasa'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia V'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia V - tsubasa');
    }
    if ('umts_spyder'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Razr/Razr MAXX (GSM)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Razr/Razr MAXX (GSM) - umts_spyder');
    }
    if ('v500'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G Pad 8.3'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G Pad 8.3 - v500');
    }
    if ('victara'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto X 2014 (Unified)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto X 2014 (Unified) - victara');
    }
    if ('victara_retcn'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Moto X 2014 (China)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Moto X 2014 (China) - victara_retcn');
    }
    if ('ville'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'HTC One S'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('HTC One S - ville');
    }
    if ('virgo'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Mi Note LTE'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Mi Note LTE - virgo');
    }
    if ('vs980'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G2 (Verizon)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G2 (Verizon) - vs980');
    }
    if ('vs985'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG G3 (Verizon)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG G3 (Verizon) - vs985');
    }
    if ('w5'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LG Optimus L70'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LG Optimus L70 - w5');
    }
    if ('wt86528'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Lenovo K31/A6010'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Lenovo K31/A6010 - wt86528');
    }
    if ('wt88047'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi RedMi 2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi RedMi 2 - wt88047');
    }
    if ('kenzo'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'XiaoMi Redmi Note 3'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('XiaoMi Redmi Note 3 - kenzo');
    }
    if ('x3'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Lenovo Lenovo X3c50/X3c70'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Lenovo Lenovo X3c50/X3c70 - x3');
    }
    if ('x9180'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'ZTE RedBull V5'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('ZTE RedBull V5 - x9180');
    }
    if ('xt897'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Photon Q'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Photon Q - xt897');
    }
    if ('xt907'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Droid RAZR M'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Droid RAZR M - xt907');
    }
    if ('xt925'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Droid RAZR HD (GSM)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Droid RAZR HD (GSM) - xt925');
    }
    if ('xt926'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Motorola Droid RAZR HD (CDMA)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Motorola Droid RAZR HD (CDMA) - xt926');
    }
    if ('yuga'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z - yuga');
    }
    if ('z008'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Asus Zenfone 2 (720p)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Asus Zenfone 2 (720p) - z008');
    }
    if ('z00a'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Asus Zenfone 2 (1080p)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Asus Zenfone 2 (1080p) - z00a');
    }
    if ('z00d'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Asus Zenfone 2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Asus Zenfone 2 - z00d');
    }
    if ('z00l'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Asus Zenfone 2 Laser (720p)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Asus Zenfone 2 Laser (720p) - z00l');
    }
    if ('z00t'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Asus Zenfone 2 Laser/Selfie (1080p)'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Asus Zenfone 2 Laser/Selfie (1080p) - z00t');
    }
    if ('z2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Zuk Z2'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Zuk Z2 - z2');
    }
    if ('z2pro'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Zuk Z2 Pro'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Zuk Z2 Pro - z2pro');
    }
    if ('z3'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z3'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z3 - z3');
    }
    if ('z3c'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z3 Compact'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z3 Compact - z3c');
    }
    if ('z3dual'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Sony Xperia Z3 Dual'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Sony Xperia Z3 Dual - z3dual');
    }
    if ('zl1'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'LeEco Le Pro 3'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('LeEco Le Pro 3 - zl1');
    }
    if ('zoom'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0 || 'Lenovo Lenovo Z90'.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) >= 0) {
        aData.push('Lenovo Lenovo Z90 - zoom');
    }
    searchSuggest.dataDisplay(aData);
}
