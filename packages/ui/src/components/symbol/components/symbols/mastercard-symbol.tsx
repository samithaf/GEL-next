import { clsx } from 'clsx';
import React from 'react';

import { Symbol } from '../../symbol.component.js';
import { type SymbolProps } from '../../symbol.types.js';

export const MastercardSymbol = ({
  'aria-label': ariaLabel = 'Mastercard',
  copyrightYear = '',
  viewBoxWidth = 80,
  viewBoxHeight = 50,
  className,
  ...props
}: SymbolProps) => (
  <Symbol
    className={clsx('h-[50px] w-[80px]', className)}
    aria-label={ariaLabel}
    copyrightYear={copyrightYear}
    viewBoxWidth={viewBoxWidth}
    viewBoxHeight={viewBoxHeight}
    {...props}
  >
    <g fill="none">
      <path
        d="M66.88 31.6v-.66h-.173l-.2.453-.197-.454h-.173v.66h.122v-.5l.185.43h.127l.186-.43v.5h.122zm-1.094 0v-.55h.22v-.11h-.562v.11h.22v.55h.122z"
        fill="#F89E1B"
      />
      <path
        d="M61.085 44.387c0 .853.54 1.535 1.413 1.535.834 0 1.383-.654 1.383-1.535 0-.882-.548-1.536-1.382-1.536-.872 0-1.413.684-1.413 1.537zm3.67 0v2.265h-.912v-.55c-.312.408-.824.664-1.47.664-1.27 0-2.236-.995-2.236-2.38 0-1.384.967-2.378 2.237-2.378.645 0 1.157.256 1.47.663V40.3h.91v4.087zm-12.817 0c0 .853.54 1.535 1.413 1.535.835 0 1.384-.654 1.384-1.535 0-.882-.55-1.536-1.383-1.536-.872 0-1.412.684-1.412 1.537zm3.67 0v2.265h-.912v-.55c-.312.408-.824.664-1.47.664-1.27 0-2.236-.995-2.236-2.38 0-1.384.967-2.378 2.237-2.378.645 0 1.157.256 1.47.663v-.548h.91v2.265zm10.71 1.925v.112h.103c.024 0 .043-.005.057-.014.014-.01.02-.023.02-.042 0-.02-.006-.033-.02-.042-.014-.01-.033-.014-.056-.014h-.1zm.104-.078c.054 0 .095.012.124.036.03.024.043.056.043.098 0 .034-.012.063-.035.085-.023.022-.056.036-.1.04l.138.16h-.107l-.127-.158h-.04v.157h-.09v-.418h.192zm-.026.56c.048 0 .093-.008.135-.026.043-.02.08-.044.11-.075.033-.032.057-.07.076-.11.018-.044.027-.09.027-.138 0-.05-.01-.094-.027-.137-.02-.043-.043-.08-.075-.11-.03-.033-.067-.058-.11-.076-.04-.018-.086-.027-.134-.027-.05 0-.096.01-.138.027-.044.018-.08.043-.113.075-.03.03-.056.068-.074.11-.017.044-.026.09-.026.138 0 .048.01.094.027.137.02.042.044.08.075.11.032.032.07.057.113.076.042.018.088.027.138.027zm0-.8c.063 0 .122.013.178.037.055.023.103.056.145.097.04.04.073.088.097.143.024.055.037.113.037.175 0 .062-.013.12-.037.174-.024.053-.057.1-.098.142-.043.04-.09.073-.146.097-.056.022-.115.035-.178.035-.065 0-.126-.013-.182-.036-.056-.025-.105-.057-.146-.098-.04-.04-.074-.09-.097-.143-.023-.055-.035-.113-.035-.175 0-.062.012-.12.036-.175.024-.055.057-.102.098-.143.04-.04.09-.074.146-.096.056-.023.117-.035.182-.035zm-7.302-3.986c-.568 0-.976.265-1.232.663v-.548h-.9v4.53h.91v-2.55c0-.75.36-1.232 1.005-1.232.2 0 .407.028.616.114l.303-.853c-.218-.084-.502-.122-.702-.122zm-34.976 2.38c0 .852.54 1.534 1.412 1.534.835 0 1.384-.654 1.384-1.535 0-.882-.55-1.536-1.384-1.536-.872 0-1.412.684-1.412 1.537zm3.668 0v2.264h-.91v-.55c-.313.408-.824.664-1.47.664-1.27 0-2.236-.995-2.236-2.38 0-1.384.967-2.378 2.237-2.378.645 0 1.156.256 1.47.663v-.548h.91v2.265zm12.266-1.537c-.73 0-1.166.484-1.25 1.148h2.444c-.066-.71-.52-1.147-1.194-1.147zm.02-.842c1.27 0 2.122.957 2.13 2.37 0 .132-.008.255-.018.378H38.8c.115.815.76 1.176 1.394 1.176.455 0 .938-.17 1.317-.474l.485.673c-.55.465-1.176.636-1.858.636-1.355 0-2.304-.948-2.304-2.39 0-1.41.91-2.368 2.238-2.368zm6.368 2.38c0 1.373.92 2.378 2.38 2.378.682 0 1.137-.152 1.63-.54l-.474-.71c-.37.264-.758.406-1.185.406-.786-.01-1.402-.625-1.402-1.535 0-.91.616-1.527 1.403-1.536.428 0 .816.143 1.186.41l.474-.712c-.493-.39-.948-.54-1.63-.54-1.46 0-2.38 1.004-2.38 2.38zM32.696 42.48c-.474-.314-1.128-.474-1.848-.474-1.147 0-1.85.54-1.85 1.44 0 .74.513 1.185 1.527 1.327l.465.067c.54.075.834.265.834.52 0 .352-.398.58-1.07.58-.712 0-1.177-.22-1.508-.475l-.464.71c.672.494 1.478.59 1.962.59 1.308 0 2.028-.608 2.028-1.47 0-.797-.55-1.204-1.545-1.346l-.464-.066c-.427-.057-.806-.19-.806-.493 0-.33.36-.558.9-.558.578 0 1.138.218 1.412.39l.426-.74zm12.71-.474c-.567 0-.975.265-1.23.663v-.548h-.902v4.53h.91v-2.55c0-.75.36-1.232 1.005-1.232.198 0 .407.028.615.114l.303-.853c-.217-.084-.5-.122-.7-.122zM37 42.122h-1.65v-1.375h-.92v1.375h-.957v.824h.958v2.142c0 1.052.37 1.678 1.536 1.678.427 0 .92-.133 1.233-.35l-.286-.807c-.294.17-.616.255-.872.255-.493 0-.692-.303-.692-.758v-2.16H37v-.825zm-14.768 4.53V43.8c0-1.072-.645-1.783-1.744-1.792-.58-.01-1.176.17-1.593.805-.313-.502-.806-.805-1.498-.805-.483 0-.995.132-1.365.663v-.548h-.91v4.53h.92v-2.597c0-.787.474-1.204 1.147-1.204.653 0 1.023.427 1.023 1.195v2.607h.92v-2.597c0-.787.492-1.204 1.146-1.204.672 0 1.032.427 1.032 1.195v2.607h.92z"
        fill="#000"
      />
      <path fill="#FF5F00" d="M31.637 34.438h16.405V7.642H31.637" />
      <path
        d="M33.33 21.04c0-5.436 2.547-10.277 6.51-13.398C36.94 5.36 33.284 4 29.308 4c-9.41 0-17.04 7.63-17.04 17.04 0 9.412 7.63 17.042 17.04 17.042 3.976 0 7.633-1.362 10.532-3.644-3.963-3.12-6.51-7.962-6.51-13.398"
        fill="#EC001B"
      />
      <path
        d="M67.412 21.04c0 9.412-7.63 17.042-17.04 17.042-3.976 0-7.633-1.362-10.532-3.644 3.964-3.12 6.51-7.962 6.51-13.398s-2.546-10.277-6.51-13.398C42.74 5.36 46.396 4 50.37 4c9.412 0 17.042 7.63 17.042 17.04"
        fill="#F89E1B"
      />
    </g>
  </Symbol>
);
