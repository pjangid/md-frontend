$(document).ready(function() {
    $("#inboxLists").sortable({
        stop: function(ev, ul) {
            let sequence = [];
            $("#inboxLists li").each(function(index, element) {
                if ($(element).data('column')) {
                    sequence.push($(element).data('column'))
                }
            })
            registerNewColumnSequenceInbox(sequence.join(","))
        },
        handle: ".handle"
    });

    try {
        reArrangeColumnSequenceInbox()
    } catch (error) {

    }

    // setInterval(() => {
    //     try {
    //         if (cleanMyArray(cvTaskType).length) {
    //             // window.clearInterval(inboxInterval);
    //             // inboxInterval = null;
    //             $(".message-inbox label").text("Clear filters for more updates")
    //             $(".message-inbox .close-message-pop").hide()
    //             $(".message-inbox").show(300)
    //         } else {
    //             //     if (!inboxInterval) {
    //             //         inboxInterval = setInterval(() => {
    //             //             updateGridRows()
    //             //         }, gridRefreshTime);
    //             $(".message-inbox").hide(300)
    //                 //     }
    //         }
    //     } catch (error) {

    //     }
    // }, 1000);

});
window.sortDataLA=(type,e)=>{
    console.log(type)
    console.log(e)
    window.clearInterval()
    if($(e).hasClass('asc')){
        $(e).addClass('desc');
        $(e).removeClass('asc')
        // Make Decending call
        console.log("Decending Call")
        $(e).attr('title','Click To Order By Ascending')

        requestFilter.OrderBy="DSC";
        requestFilter.ShortField=type;
        renderFromSitecore()
    }else{
        $(e).removeClass('desc');
        $(e).addClass('asc');
        // Make Assending Call
        console.log("Make Assending Call")
        $(e).attr('title','Click To Order By Descending')


        requestFilter.OrderBy="ASC";
        requestFilter.ShortField=type;
        renderFromSitecore()
    }
}
function reArrangeColumnSequenceInbox() {
    let sequence = $("#inboxLists").data('list-sequence').split(',');

    let issuerColumn = ` <li data-column="issuer-inbox" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Issuer/RIE/RE
        <span title="Click To Order By Ascending" onclick="sortDataLA('Content',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="issuer-inbox-column">

    </div>
    </li>`;
    let actionedBy = ` <li data-column="action-by" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Actioned By
        <span title="Click To Order By Ascending" onclick="sortDataLA('AssignedTo',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="actioned-by">

    </div>
    </li>`;

    let titleColumn = ` <li data-column="title" class="ad-flex-grow " style="width:200px">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Title
        <span title="Click To Order By Ascending" onclick="sortDataLA('title',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="title-column">

    </div>
    </li>`;

    let typeColumn = ` <li data-column="type" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Type
        <span title="Click To Order By Ascending" onclick="sortDataLA('TaskType',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="type-column">
        
    </div>

    </li>`;
    let dateColumn = `<li style='width:150px' data-column="date" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Date
        <span title="Click To Order By Ascending" onclick="sortDataLA('Date',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="date-column">

    </div>
    </li>`
    let statusColumn = ` <li data-column="status" class="ad-flex-grow">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne ad-rounded-2">
        Status
        <span title="Click To Order By Ascending" onclick="sortDataLA('Status',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="statusColumn">
        
    </div>
</li>`


    sequence.forEach(element => {
        if (element == "status") {
            appendColumn(statusColumn)
        } else if (element == "action-by") {
            appendColumn(actionedBy)
        } else if (element == "date") {
            appendColumn(dateColumn)
        } else if (element == "type") {
            appendColumn(typeColumn)
        } else if (element == "issuer-inbox") {
            appendColumn(issuerColumn)
        }else if(element == "title"){
            appendColumn(titleColumn)
        }
    });

    subscribeInboxApi();

}



function appendColumn(element) {
    $("#inboxLists").append(element)
}

var newDocumentList = [];




function renderDefaultDashboardDocumentList(documentList) {
    appendTicker(documentList);
    appendStatus(documentList);
    actionedBY(documentList);
    appendDate(documentList);
    appendissuerColumn(documentList);
    titleColumn(documentList)
}

function appendDate(documentList) {
    if (gridRows.length) {} else {
        $("#inboxLists .date-column").empty();
    }
    for (let index = 0; index < documentList.length; index++) {
        $("#inboxLists .date-column").prepend(`<p data-key="${generateKeyFromObject(documentList[index],"Date")}" data-payload="'${documentList[index]["Type"]}','${documentList[index]["TaskTypeID"]}','${documentList[index]["Status"]}','${documentList[index]["ActionItemID"]}','${documentList[index]["ID"]}'" data-row-id="${documentList[index]["ID"]}" data-value="${documentList[index]["Date"]}" class="inbox-row-value ad-flex ad-items-center column-field ad-py-22 ${!documentList[index]["MarkAsRead"]?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
          <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px"> ${documentList[index]["Date"]}</label></a>
        </p>`);
    }
}

function actionedBY(documentList) {
    if (gridRows.length) {} else {
        $("#inboxLists .actioned-by").empty();
    }

    for (let index = 0; index < documentList.length; index++) {
        $("#inboxLists .actioned-by").prepend(`<p data-key="${generateKeyFromObject(documentList[index],"ActionedBy")}" data-payload="'${documentList[index]["Type"]}','${documentList[index]["TaskTypeID"]}','${documentList[index]["Status"]}','${documentList[index]["ActionItemID"]}','${documentList[index]["ID"]}'" data-row-id="${documentList[index]["ID"]}" data-value="${documentList[index]["ActionedBy"]}" class="inbox-row-value ad-flex ad-items-center column-field ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
        <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index]["ActionedBy"]}</label></a>
        </p>`);
    }
}

function titleColumn(documentList) {
    if (gridRows.length) {} else {
        $("#inboxLists .title-column").empty();
    }

    for (let index = 0; index < documentList.length; index++) {
        $("#inboxLists .title-column").prepend(`<p data-key="${generateKeyFromObject(documentList[index],"Title")}" data-payload="'${documentList[index]["Type"]}','${documentList[index]["TaskTypeID"]}','${documentList[index]["Status"]}','${documentList[index]["ActionItemID"]}','${documentList[index]["ID"]}'" data-row-id="${documentList[index]["ID"]}" data-value="${documentList[index]["Title"]}" class="inbox-row-value ad-flex ad-items-center column-field ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
        <a href="${documentList[index]["Title"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index]["Title"]}</label></a>
        </p>`);
    }
}

function appendStatus(documentList) {
    if (gridRows.length) {} else {
        $("#inboxLists .statusColumn").empty();
    }

    for (let index = 0; index < documentList.length; index++) {
        $("#inboxLists .statusColumn").prepend(`<p data-key="${generateKeyFromObject(documentList[index],"Status")}" data-payload="'${documentList[index]["Type"]}','${documentList[index]["TaskTypeID"]}','${documentList[index]["Status"]}','${documentList[index]["ActionItemID"]}','${documentList[index]["ID"]}'" data-row-id="${documentList[index]["ID"]}" data-value="${documentList[index]["Status"]}" class="inbox-row-value ad-flex ad-items-center column-field ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
            <span class="documentStatus ${documentList[index]["Status"].split(" ").join('-').toLowerCase()}"></span>
            <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index]["Status"]}</label></a>
        </p>`);
    }
}

function appendTicker(documentList) {
    if (gridRows.length) {} else {
        $("#inboxLists .type-column").empty();
    }

    for (let index = 0; index < documentList.length; index++) {

        $("#inboxLists .type-column").prepend(`<p data-key="${generateKeyFromObject(documentList[index],"Type")}" data-payload="'${documentList[index]["Type"]}','${documentList[index]["TaskTypeID"]}','${documentList[index]["Status"]}','${documentList[index]["ActionItemID"]}','${documentList[index]["ID"]}'" data-row-id="${documentList[index]["ID"]}" data-value="${documentList[index]["Type"]}" class="inbox-row-value ad-flex ad-items-center column-field ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
        <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full ad-font-semibold ad-text-blue-shadeFour"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index]["Type"]}</label></a>
        </p>`);
    }
}

function appendissuerColumn(documentList) {
    if (gridRows.length) {} else {
        $("#inboxLists .issuer-inbox-column").empty();
    }

    for (let index = 0; index < documentList.length; index++) {
        $("#inboxLists .issuer-inbox-column").prepend(`<div data-key="${generateKeyFromObject(documentList[index],"Issuers")}" data-payload="'${documentList[index]["Type"]}','${documentList[index]["TaskTypeID"]}','${documentList[index]["Status"]}','${documentList[index]["ActionItemID"]}','${documentList[index]["ID"]}'" data-row-id="${documentList[index]["ID"]}" data-value="${documentList[index]["Issuers"]}" class="inbox-row-value ad-flex ad-items-center column-field ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
        ${generateListFromColumn(documentList,index,"Issuers","Issuer/RIE/RE")}
        </div>`);
    }
}





// Listing authority tab 

$(function() {
    // $("#announcementListingAuthorityTab").click(function() {
    //     // alert()
    // })
})

function generateKeyFromObject(array, key) {
    return Object.keys(array)[Object.keys(array).indexOf(key)]
}


function fetchInboxData() {
    return new Promise((resolve, reject) => {
        resolve(sampleInboxData)
    })
}

var gridRows = [];
var oldStoreData = [];
var inboxInterval = "";
var scrollAmount = 100;
var gridRefreshTime = 5000;
var isToastVisible = false;

function subscribeInboxApi() {
    if (gridRows.length) {} else {
        fetchInboxFromServer().then((data) => {
            renderDefaultDashboardDocumentList(data)
            gridRows = data;
            inboxInterval = setInterval(() => {
                updateGridRows()
            }, gridRefreshTime);
        })
    }
}

function updateGridRows() {
    fetchInboxFromServer().then((data) => {
        let _data = data.slice();
        removeOldRow(_data).then(() => {
            // setTimeout(() => {
            compareData(gridRows, _data);
            // }, 1000);
        })
    })
}

window.renderFromSitecore=()=>{
    gridRows = [];
    oldStoreData=[];
    window.clearInterval(inboxInterval);
    subscribeInboxApi();
}

// function removeOldRow(data) {
//     return new Promise((resolve, reject) => {
//         $("[data-row-id]").each((index, elem) => {
//             let status = false;
//             data.forEach((element, i) => {
//                 if (!status) {
//                     if (element["ID"] == $(elem).attr("data-row-id")) {
//                         status = true;
//                     }
//                 }
//             });
//             if (!status) {
//                 if (isValidScroll()) {
//                     $("[data-row-id='" + $(elem).attr("data-row-id") + "']").fadeOut(100, function() {
//                         $(this).remove()
//                     })
//                     $(".message-inbox").hide(300)
//                 } else {
//                     if (isToastVisible) {} else {
//                         $(".message-inbox").show(300)
//                     }
//                 }

//             }
//         })
//         resolve()
//     })
// }
function removeOldRow(data) {
    return new Promise((resolve, reject) => {
        $("[data-row-id]").each((index, elem) => {
            let status = false;
            // Below code will search old data in new data
            // If not found then status variable will remain false
            // Thus the row will be removed from html.
            // Because the old data does not exist anymore in new response
            data.forEach((element, i) => {
                if (!status) {
                    if (element["ID"] == $(elem).attr("data-row-id")) {
                        status = true;
                    }
                }
            });
            // Below code will take care of removal of row. 
            if (!status) {
                if (isValidScroll()) {
                    $("[data-row-id='" + $(elem).attr("data-row-id") + "']").fadeOut(100, function() {
                        $(this).remove()
                    })
                    $(".message-inbox").hide(300)
                } else {
                    if (isToastVisible) {} else {
                        $(".message-inbox").show(300)
                    }
                }

            }
        })
        resolve()
    })
}

function compareData(oldData, newData) {
    oldStoreData = [];
    oldData.forEach(oldElement => {
        newData.forEach((newElement, index) => {
            if (oldElement["ID"] == newElement["ID"]) {
                oldStoreData.push(newElement);
                newData.splice(index, 1)
            }
        });
    });

    updateOldData(oldStoreData).then((oldAndRemoved) => {
        newData = newData.concat(oldAndRemoved)
        if (newData.length) {
            if (isValidScroll()) {
                setTimeout(() => {
                    pushFreshFeed(newData);
                    gridRows = oldStoreData.concat(newData);
                    $(".message-inbox").hide(300)
                }, 1400);
            } else {
                if (isToastVisible) {} else {
                    $(".message-inbox").show(300)
                }
            }

        }


    })
}

function updateOldData(data) {
    return new Promise((resolve, reject) => {
        let oldDataRenderedAsNew = [];
        data.forEach(element => {
            try {
                let status = false;
                $("[data-row-id='" + element["ID"] + "']").each((index, elem) => {
                    if (($.trim($(elem).data("value"))) == ($.trim(element[$(elem).data("key")]))) {} else {
                        if (isValidScroll()) {
                            // setTimeout(() => {
                            //     $(elem).find("label").text(element[$(elem).data("key")]).parent().addClass("newElement");
                            // }, 100);
                            $("[data-row-id='" + element["ID"] + "']").fadeOut(100, function() {
                                $(this).remove()
                            })
                            $(".message-inbox").hide(300)
                            status = true;
                        } else {
                            if (isToastVisible) {} else {
                                $(".message-inbox").show(300)
                            }
                        }
                    }
                })
                if (status) {
                    oldDataRenderedAsNew.push(element)
                }
            } catch (error) {
                reject()
            }
        });
        resolve(oldDataRenderedAsNew)
    })
}

function pushFreshFeed(data) {
    renderDefaultDashboardDocumentList(data)
}


window.getScroll = function() {
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}

function isValidScroll() {
    if (window.getScroll()[1] > scrollAmount)
        false
    else
        return true
}

// window.onscroll = function() {
//     initInboxServices()
// };

// function initInboxServices() {

//         clearInterval(inboxInterval)
//         inboxInterval = setInterval(() => {
//             updateGridRows()
//         }, gridRefreshTime);
// }
$(".message-inbox span").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800, function() {});
})

$(".message-inbox .close-message-pop").click(function(e) {
    e.preventDefault()
    $(".message-inbox").hide(300);
})

$(document).on("click", ".inbox-row-value a", function(e) {
    e.preventDefault();
})

$(document).on("click", ".inbox-row-value", function(e) {
    e.preventDefault();
    try {
        if ($(this).data("payload").toLowerCase().indexOf("pending review") >= 0) {
            $("#reviewInboxRequest").attr('data-payload', $(this).data('payload'))
            $("#redirectInboxRequest").attr('data-payload', $(this).data('payload'))
            $("#inboxReviewRequest").fadeIn(300);
        } else {
            redirectInboxUser(this)
        }
    } catch (error) {
        console.log(error)
    }


})