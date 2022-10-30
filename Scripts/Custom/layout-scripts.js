
    $(document).ready(function () {
        $('#cart-list').load('/Home/SmallCart');
            $.ajax({
        type: "POST",
                url: "/Home/GetAllBranch",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (msg) {
        $.each(msg, function (i, item) {
            $("#branch-list").append('<li><a href="/Home/SetBranch/' + item.Code + '" class="no-skin">' + item.Name + '</a></li>');
            $("#select-branch-list").append('<a href="/Home/SetBranch/' + item.Code + '" class="no-skin"><li class="list-group-item d-flex justify-content-between align-items-center">' + item.Name + '</li></a>');
        });
                }
            });
            $.ajax({
        type: "POST",
                url: "/Home/GetBranch",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (msg) {
                    if (msg.Name != null) {
        $("#nav-phone").html(msg.Phone);
                        $("#nav-phone").attr("href", "tel:" + msg.Phone);
                        $("#footer-address").html(msg.Location);
                        $("#footer-phone").html(msg.Phone);
                        $("#footer-phone").attr("href", "tel:" + msg.Phone);
                        $("#footer-mobile").html(msg.Mobile);
                        $("#footer-mobile").attr("href", "tel:" + msg.Mobile);
                        $("#footer-email").html(msg.Email);
                        $("#footer-email").attr("href", "mailto:" + msg.Email);
                    } else
                        $('#select-branch-model').modal('show');
                },
                error: function () {
        $('#select-branch-model').modal('show');
                }
            });
        });