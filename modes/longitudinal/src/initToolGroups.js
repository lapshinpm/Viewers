function initDefaultToolGroup(extensionManager, ToolGroupService) {
  const utilityModule = extensionManager.getModuleEntry(
    '@ohif/extension-cornerstone-3d.utilityModule.tools'
  );

  const { toolNames, Enums } = utilityModule.exports;

  const tools = {
    active: [
      {
        toolName: toolNames.WindowLevel,
        bindings: [{ mouseButton: Enums.MouseBindings.Primary }],
      },
      {
        toolName: toolNames.Pan,
        bindings: [{ mouseButton: Enums.MouseBindings.Auxiliary }],
      },
      {
        toolName: toolNames.Zoom,
        bindings: [{ mouseButton: Enums.MouseBindings.Secondary }],
      },
      { toolName: toolNames.StackScrollMouseWheel, bindings: [] },
    ],
    passive: [
      { toolName: toolNames.Length },
      { toolName: toolNames.Bidirectional },
      { toolName: toolNames.Probe },
      { toolName: toolNames.EllipticalROI },
      { toolName: toolNames.RectangleROI },
      { toolName: toolNames.StackScroll },
    ],
    // enabled
    // disabled
  };

  const toolGroupId = 'default';
  ToolGroupService.createToolGroupAndAddTools(toolGroupId, tools, {});
}

function initSRToolGroup(extensionManager, ToolGroupService) {
  const SRUtilityModule = extensionManager.getModuleEntry(
    '@ohif/extension-cornerstone-dicom-sr.utilityModule.tools'
  );

  const CS3DUtilityModule = extensionManager.getModuleEntry(
    '@ohif/extension-cornerstone-3d.utilityModule.tools'
  );

  const { toolNames: SRToolNames } = SRUtilityModule.exports;
  const { toolNames, Enums } = CS3DUtilityModule.exports;

  const tools = {
    active: [
      {
        toolName: toolNames.WindowLevel,
        bindings: [
          {
            mouseButton: Enums.MouseBindings.Primary,
          },
        ],
      },
      {
        toolName: toolNames.Pan,
        bindings: [
          {
            mouseButton: Enums.MouseBindings.Auxiliary,
          },
        ],
      },
      {
        toolName: toolNames.Zoom,
        bindings: [
          {
            mouseButton: Enums.MouseBindings.Secondary,
          },
        ],
      },
      {
        toolName: toolNames.StackScrollMouseWheel,
        bindings: [],
      },
    ],
    passive: [
      {
        toolName: SRToolNames.SRLengthTool,
      },
      // { toolName: toolNames.Bidirectional },
      // { toolName: toolNames.Probe },
      // { toolName: toolNames.EllipticalROI },
      // { toolName: toolNames.RectangleROI },
      // { toolName: toolNames.StackScroll },
    ],
    enabled: [
      {
        toolName: SRToolNames.DICOMSRDisplayTool,
        bindings: [],
      },
    ],
    // disabled
  };

  const toolGroupId = 'SRToolGroup';
  ToolGroupService.createToolGroupAndAddTools(toolGroupId, tools, {});
}

function initToolGroups(extensionManager, ToolGroupService) {
  initDefaultToolGroup(extensionManager, ToolGroupService);
  initSRToolGroup(extensionManager, ToolGroupService);
}

export default initToolGroups;
