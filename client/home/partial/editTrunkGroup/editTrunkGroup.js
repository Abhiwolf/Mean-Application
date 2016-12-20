angular.module('home').controller('DemopageCtrl', function ($scope) {

    $scope.tempDataPhone = [
        {
            name: 'None'
        },
        {
            name: 'Phone Number'
        },
        {
            name: 'Group Trunk Group'
        }
    ];

    $scope.forwardAllowTooltip = "When Forward Always Action is set, any calls that normally use this group trunk group are forwarded to the location set by Forward Always Target";
    $scope.unreachableDestinationTimer = "Unreachable Destination Timer:When an incoming call can't be routed successfully over this group trunk group  within the specified number of seconds, the Unreachable Destination action is invoked";

    $scope.unreachableDestination = "Unreachable Destination:	When an incoming call can't be routed successfully because this group trunk group is at capacity (i.e., the maximum concurrent call limit has been exceeded) or is unreachable for other reasons, the Unreachable Destination action is applied. Options are:None: No Unreachable Destination action is applied when incoming calls can't be routed.Phone Number: The phone number to which incoming calls should be forwarded when the destination is unreachable. The phone number can be public, private, or international.Group Trunk Group:The group trunk group to which incoming calls should be routed when the destination is unreachable.";

    $scope.burstingMaxTotal = "Bursting Maximum Total Calls sets the maximum number of calls that can be made beyond the group trunk group's configured capacity.";

    $scope.trunkBurst = "Trunk Burst:When set to true, increases call capacity on an as-needed basis to go beyond the number of maximum concurrent calls allowed on this group trunk group. Trunk bursting is invoked if the Maximum Concurrent Calls limit for this group trunk group has been reached and other group trunk group(s) in the enterprise have available capacity. Additional concurrent call capacity can be borrowed from these group trunk group(s), but the total number of concurrent calls across the enterprise remains fixed and can't exceed the sum of the Maximum Concurrent Calls of all group trunk groups in the enterprise. The Bursting Maximum Total Calls value cannot exceed 20% of a group trunk group's Maximum Concurrent Calls. Bursting Maximum Incoming Calls and Bursting Maximum Outgoing Calls give you explicit control over the maximum number of bursting incoming versus outgoing calls allowed on this group trunk group, but cannot exceed the value set for Bursting Maximum Total Calls.";

    $scope.maxConcurrentCalls = "Maximum Concurrent Calls sets the maximum number of concurrent calls that can be handled by this group trunk group. Incoming Concurrent Calls and Outgoing Concurrent Calls provide explicit control over the maximum number of incoming versus outgoing concurrent calls allowed on this group trunk group. The values entered for Incoming Concurrent Calls and Outgoing Concurrent Calls can not exceed the Maximum Concurrent Calls value.";

    $scope.groupTrunkGroup = {};
    $scope.groupTrunkGroup.incommingConcurr = '5';
    $scope.groupTrunkGroup.outgoingConcurr = '5';
});
